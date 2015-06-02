var packInfo = require('../package');
var npm = require('jsnbt/src/util/npm.js')

console.log('installing ' + packInfo.name + ' v' + packInfo.version);
npm.pack(packInfo.name, true);
console.log('installed ' + packInfo.name + ' v' + packInfo.version);