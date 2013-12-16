module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat:{
            options: {
                separator: ';',
                stripBanners: true,
                banner: '/* update: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss TT") %> */\n'
            },
            dist: {
                src: ['src/<%= pkg.name %>.js'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                beautify: {
                    max_line_len: 3000,
                },
                banner: '/*!\n' + 
                        '   project: <%= pkg.name %>\n' + 
                        '   update : <%= grunt.template.today("yyyy-mm-dd HH:MM:ss TT") %>\n' + 
                        '   author : <%= pkg.author %>\n' + 
                        '*/\n'
            },
            dist: {
                files: {
                    'build/<%= pkg.name %>.min.js': 'build/<%= pkg.name %>.js',
                    'examples/js/<%= pkg.name %>.min.js': 'build/<%= pkg.name %>.js'
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                smarttabs: true,
                unused: false,
                multistr: true,
                "-W041": false,
                "-W040": false,
                globals: {
                    jQuery: true
                }
            }
        },

    });

    grunt.registerTask('default', ['jshint', 'requirejs', 'copy', 'uglify']);
};