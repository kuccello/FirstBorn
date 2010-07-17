var parse = require('url').parse;
var connect = require('connect');
var prefix = '/login';
var haml = require('./../../utils/haml-helper');

// Load HAML files
haml.do_load(__dirname+'/../views/');

var login = function (app) {

    // Form present
    app.get(prefix , function(req, res, params) {

        // TODO ---
        // Check the req headers incase this is a js login form request
        // if it is then send back a partial html
        // if it is NOT then send back a full page render
        // SPECIAL CASE:
        // - If there is a session present with a login_token
        //   AND this is an XHR request then send back a partial with a message in it
        //   ELSE send back a redirect to the dashboard

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(haml.render('login','layout',{test:'foo'}));
    });

    // Form submit
    app.post(prefix, function(req,res,params){
        req.session.admin_token = 'VALID-12012012';
        res.redirect('/');
    });
}

module.exports = login