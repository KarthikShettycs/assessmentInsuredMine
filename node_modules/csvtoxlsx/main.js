var Converter = require('csvtojson').Converter;
var json2xls = require('json2xls');
var fs = require('fs');

module.exports = function(csv_file, output_file, callback) {
	var converter = new Converter({});
	converter.fromFile(csv_file,function(err, result){
		var xls = json2xls(result);
		fs.writeFileSync(output_file, xls, 'binary');
		callback();
	});
};