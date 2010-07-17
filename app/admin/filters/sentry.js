var sys = require('sys');
var connect = require('connect');

var sentry = function(req, res, next) {

    console.log('TODO: IMPLEMENT SESSION FILTER HERE');

    console.log('ADMIN TOKEN: ['+req.session.admin_token+']');

    if ((req.session.admin_token === undefined) || (req.session.admin_token === '')) {

//        console.log('req:\n-----'+sys.inspect(req.headers)+'\n-----');


        // TODO --
        // If this is an XHR then send back a message
        // TODO --
        //        console.log('XHR: '+req.headers['X-Requested-With']);
        // Else send back a redirect? or do we trigger the error case?
        //        res.writeHead(500, { 'Content-Type': 'text/plain' });
        //        res.end("FAIL");
        
        res.writeHead(302, { 'Location': '/login' });
        res.end('You are not authorized to access this resource yet. Try logging in first.');

    } else {
        // TODO -- now ensure that the token is valid

        if (req.session.admin_token === 'VALID-12012012') {

            next();

        }else{
            res.writeHead(302, { 'Location': '/login' });
            res.end('Your current token is not authorized to access this resource.');
        }
    }
}


module.exports = sentry;