var fs = require('fs');
var path = require('path');

var render_files = function(renderer, in_dir, out_dir, options){
  in_dir = in_dir || '';
  out_dir = out_dir || '';
  var input_path = path.resolve(__dirname, in_dir);
  var output_path = path.resolve(__dirname, out_dir);
  var input_ext = 'md';
  var output_ext = 'html';

  var file_list = [];

  //var file_list = [];
  fs.readdirSync(input_path).forEach(function(file_path){
    var ext = path.extname(file_path);
    if( ext === '.'+input_ext){
      file_list.push(file_path);
    }
  });
  //var subject_list = file_list.map(function(file_name){
  //  return file_name.split('.')[0];
  //});
  var results = file_list.map(function(file_name){
    var name = file_name.split('.')[0];
    console.log('### '+name);
    var input_file_path = path.resolve(input_path, file_name);
    var input_string = fs.readFileSync(input_file_path, {encoding: 'utf8'});

    var output_string = renderer(input_string);

    var output_file_path = path.resolve(output_path, name+'.'+output_ext);
    fs.writeFileSync(output_file_path, output_string, {encoding: 'utf8'});

    return {
      name: name,
      input_file_path: input_file_path,
      output_file_path: output_file_path,
    };
  });

  return results;
};

module.exports = render_files;
