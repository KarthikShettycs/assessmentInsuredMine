async function convertToXLSX(filePath, fileType) {
    let data;
    if (fileType === 'text/csv') {
        data = await csvToJson.uploadCSVfile(filePath);
    } else if (fileType.includes('spreadsheetml')) {
        data = await xlsxToJson.uploadXLSXfile(filePath);
    } else {
        throw new Error('Unsupported file type');
    }
    updateDobToDate(data);

    // Convert data to XLSX format
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const xlsxFilePath = path.join('assets', `${path.basename(filePath)}.xlsx`); // Construct new XLSX file path
    XLSX.writeFile(wb, xlsxFilePath);

    return xlsxFilePath;
}