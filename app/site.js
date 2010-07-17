require.paths.unshift('./filters/');
require.paths.unshift('./endpoints/');

var connect = require('connect');

module.exports = connect.createServer(
    connect.logger(),
    connect.staticProvider(__dirname + '/site/public')
);