

const $ = require('dekko');

$('dist')
  .isDirectory()
  .hasFile('antd.css')
  .hasFile('antd.min.css')
  .hasFile('antd.js')
  .hasFile('antd.min.js');

console.log('`dist` directory is valid.');
