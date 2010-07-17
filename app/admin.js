var parse = require('url').parse;
var connect = require('connect');
var MemoryStore = require('connect/middleware/session/memory');
var prefix = ''

var sentry =    require('./admin/filters/sentry');
var login =     require('./admin/endpoints/login');
var dashboard = require('./admin/endpoints/dashboard');
var accounts =  require('./admin/endpoints/accounts');
var lessons =   require('./admin/endpoints/lessons');
var system =    require('./admin/endpoints/system');

module.exports = connect.createServer(
        connect.cookieDecoder(),
        connect.session({ store: new MemoryStore({ reapInterval: 60000 * 10 }) }),
        connect.logger(),
        connect.staticProvider(__dirname + '/admin/public'),
        connect.router(login),
        sentry,
        connect.router(dashboard),
        connect.router(accounts),
        connect.router(lessons),
        connect.router(system)
        );