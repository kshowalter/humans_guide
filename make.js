var md = require('markdown-it')();
var doT = require('dot');


var render_files = require('./render_files');
var extract_metadata = require('./extract_metadata');

var renderer = function(input_string){
  var input = extract_metadata(input_string);

  if( input.string.trim() !== '' ){
    var output_string = md.render(input.string);
    var meta = input.meta;

    var template = doT.template(output_string);
    output_string = template({
      title: meta.title
    });

    console.log(output_string.slice(0,40));

  } else {
    output_string = input.string;
  }

  return output_string;
};

var results = render_files(renderer, 'subject', 'public');

console.log(results.length);
