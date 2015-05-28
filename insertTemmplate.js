var fs = require('fs');
var ejs = require('ejs')




fs.readFile('digicode.template.html', 'utf8', function(err, data) {
    if(err) {
        process.exit();
    }
    console.log(data.split('\n').toString());
});
