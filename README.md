# assessmentInsuredMine
Task 1
Create an API  to upload the attached XLSX/CSV data into MongoDB. (Please accomplish this using worker threads)

Endpoint: http://localhost:20202/api/fileupload
Payload: 
    key:file
    value:csv/xlsx file


Search API to find policy info with the help of the username.

Endpoint: http://localhost:20202/api/getPolicyInfo
Payload: 
        {
            "username":"Humberto Boykins"
        }
    

API to provide aggregated policy by each user.

Endpoint: http://localhost:20202/api/getAggregateData
Payload: null

Task 2
Track real-time CPU utilization of the node server and on 70% usage restart the server.
Endpoint: http://localhost:20202/api/startMonitoringCPU
Endpoint: http://localhost:20202/api/stopMonitoringCPU


Create a post-service that takes the message, day, and time in body parameters and it inserts that message into DB at that particular day and time.

Endpoint: http://localhost:20202/api/storeMessage
Payload:{
    "message": "Hello",
    "day": "2024-07-03",
    "time": "16:45:00"
}
