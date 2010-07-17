var parse = require('url').parse;
var connect = require('connect');
var prefix = '/'

var dashboard = function (app) {

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


//        if (req.session.foo === undefined) {
//            req.session.foo = 0;
//        }
//
//        console.log(sys.inspect(req.session));
//
//        req.session.foo = req.session.foo + 1;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('DASHBOARD NOT IMPLEMENTED YET!! TODO: '+__filename);
    });

    // Form submit
    app.post(prefix, function(req,res,params){

    });
}

module.exports = dashboard