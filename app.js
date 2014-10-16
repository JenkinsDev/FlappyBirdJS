requirejs.config({
    baseUrl: 'source/js',
    paths: {
        "libs": "libs"
    },
    shim: {
        // CreateJS is not built out as a module-esque system so we go
        // ahead and just use this shim to force it to export the createjs
        // object.
        'libs/createjs': {
            exports: 'createjs'
        }
    }
});

requirejs(['core']);