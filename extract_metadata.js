var extract_metadata = function(input_string){
  var lines = input_string.split('\n');

  if( lines[0] === '---'){ // metadata present
    var meta = {};

    var i = 1;
    while( lines[i].trim() !== '---'){
      if( lines[i].trim() === '' ) continue;
      var paramater = lines[i].split(':');

      var paramater_name = paramater[0].trim();
      var paramater_value = paramater[1].trim();

      if( paramater_value[0] === '[' ){
        paramater_value[0] = paramater_value[0].replace(/(\[|\])/g, '').split(',').map(function(paramater_subvalue){
          return paramater_subvalue.trim();
        });
      }

      meta[paramater_name] = paramater_value;

      i++;
    }
  }

  var output_string = lines.slice(i+1).join('/n');

  return  {
    string: output_string,
    meta: meta
  };
};

module.exports = extract_metadata;
