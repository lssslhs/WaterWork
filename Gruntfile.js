module.exports = function(grunt){ 
    // load plugins
    [
        'grunt-cafe-mocha',
        'grunt-contrib-jshint',
        'grunt-exec',
        'grunt-contrib-jade',
    ].forEach(function (task){ 
        grunt.loadNpmTasks(task);
    });
    // configure plugins
    grunt.initConfig({
        cafemocha: {
            all: { 
                src: 'qa/tests-*.js', 
                options: { 
                    ui: 'tdd' 
                }, 
            }
        }, 
        jshint: {
            app: [
                'app.js', 
                'public/javascripts/**/*.js',
                'lib/**/*.js'
            ],
            qa: [
                'Gruntfile.js', 
                'public/qa/**/*.js', 
                'qa/**/*.js'
            ],
        },
        exec: {
            // linkchecker: { 
            //     cmd: 'linkchecker http://localhost:3001' 
            // }
        }, 
        jade: {
            compile: {
                options: {
                    compileDebug: false,
                    pretty: true,
                },
                files: [ {
                    cwd: "build/jade",
                    src: "**/*.jade",
                    dest: "views",
                    expand: true,
                    ext: ".html"
                } ]
            }
        },
    });
    // register tasks
    grunt.registerTask('default', ['jade']);
};