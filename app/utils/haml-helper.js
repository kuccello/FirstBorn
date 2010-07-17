// TODO -- wrap this in a function so we can hook a directory watcher

var that = this
var fs = require('fs');
var sys = require('sys');
var haml = require('haml-js/haml');

var view_map = {}
var loaded = false


//    console.log(sys.inspect(view_map));


module.exports = {
    do_load: function(haml_path) {

        if (!loaded) {
            console.log('HAML PATH: ' + haml_path);

            fs.readdir(haml_path, function(err, files) {

                console.log(sys.inspect(files));
                var i = 0;
                var haml_name;
                for (i; i < files.length; i++) {
                    haml_name = files[i].substring(0, files[i].indexOf("."));
                    console.log(haml_name);
                    console.log(haml_path + files[i]);
                    // TODO -- catch exception and move onto the next file
                    data = fs.readFileSync(haml_path + files[i]);
                    //, function (err, data) {

                    //                        if (err) {
                    //                            console.log('--- FILE: Haml ERROR ---');
                    //                            console.log(data);
                    //                            console.log('------------------------');
                    //                            throw err;
                    //                        } else {
                    //                            console.log('loaded haml file: ' + haml_name);
                    //                        }

                    console.log('loaded haml file: ' + haml_name);
                    view_map[haml_name] = haml('' + data + '');
                    //                    })
                }
                loaded = true;

            });
        }
    },
    // called via XXX.render(view, layout, options)
    render: function(yield, name, options) {
        options['yield'] = this.partial(yield, options);
        return view_map[name](options);
    },

    partial: function(name, options) {
        return view_map[name](options);
    }
}