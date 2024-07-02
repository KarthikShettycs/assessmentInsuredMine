const excelDateToJSDate = (serial) => {
  console.log(serial)
    const utc_days = serial - 25569;
    const utc_value = utc_days * 86400;
    const date_info = new Date(utc_value * 1000);
    
    const fractional_day = serial - Math.floor(serial);
    const total_seconds = Math.round(86400 * fractional_day);
    console.log(new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate()))
    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate());
  };
  module.exports=excelDateToJSDate