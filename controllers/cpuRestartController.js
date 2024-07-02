const os = require('os');
const { exec } = require('child_process');
let monitoringInterval = null;

const checkCPUUsage = () => {
    const cpus = os.cpus();
    let user = 0;
    let nice = 0;
    let sys = 0;
    let idle = 0;
    let irq = 0;

    for (let cpu of cpus) {
        user += cpu.times.user;
        nice += cpu.times.nice;
        sys += cpu.times.sys;
        idle += cpu.times.idle;
        irq += cpu.times.irq;
    }

    const total = user + nice + sys + idle + irq;

    return {
        user: (user / total) * 100,
        sys: (sys / total) * 100,
        idle: (idle / total) * 100,
        irq: (irq / total) * 100,
        total: ((user + sys + nice + irq) / total) * 100,
    };
};

const monitorCPU = (req,res) => {
    if (monitoringInterval) {
        clearInterval(monitoringInterval);
    }

    monitoringInterval = setInterval(() => {
        const usage = checkCPUUsage();
        console.log(`CPU Usage: ${usage.total.toFixed(2)}%`);

        if (usage.total > 70) {
            console.log('CPU usage exceeded 70%. Restarting server.....');
            exec('/usr/local/bin/pm2 restart all', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error restarting server: ${error.message}`);
                    return;
                }

                if (stderr) {
                    console.error(`stderr: ${stderr}`);
                    return;
                }

                console.log(`stdout: ${stdout}`);
            });
        }
    }, 5000); 
    res.send('CPU monitoring started.');
};

const stopCPUmonitor = (req,res)=>{
    if (monitoringInterval) {
        clearInterval(monitoringInterval);
        monitoringInterval = null;
        res.status(200).json({status:200,message:'CPU monitoring stopped.'});
    } else {
        res.status(200).json({status:200,message:'CPU monitoring is not running.'});
    }
}


module.exports={monitorCPU,stopCPUmonitor}