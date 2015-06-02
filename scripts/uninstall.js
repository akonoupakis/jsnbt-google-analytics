var packInfo = require('../package');
var npm = require('jsnbt/src/util/npm.js')

console.log('uninstalling ' + packInfo.name + ' v' + packInfo.version);
npm.unpack(packInfo.name);
console.log('uninstalled ' + packInfo.name + ' v' + packInfo.version);