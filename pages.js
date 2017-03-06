var fs = require('fs');
var path = require('path');

var pages = function(){
  var subject_path = path.resolve(__dirname, 'subject');

  var file_list = fs.readdirSync(subject_path);
  console.log(file_list);

  var subject_list = file_list.map(function(file_name){
    return file_name.split('.')[0];
  })
  console.log(subject_list);


  return subject_list;
}

module.exports = pages();
