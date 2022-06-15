//let { cwd } = require('node:process');

const pwd = require('./pwd');
const ls = require('./ls');

//process.stdout.write('prompt > ');
process.stdout.write('prompt > ');

pwd();
ls();
