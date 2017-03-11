module.exports = function render(locals) {
  console.log('locals.assets', locals.assets);
  return '<html>' + locals.greet + ' from ' + locals.path + ' x</html>';
};
