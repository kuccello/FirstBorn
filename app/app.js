var connect = require('connect');
var config = require('./config');
var admin = require('./admin');
var site = require('./site');

connect.createServer(admin).listen(config.admin_port);
connect.createServer(site).listen(config.site_port);