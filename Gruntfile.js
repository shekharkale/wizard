module.exports = function(grunt) {

    var gruntSupport = GruntSupport(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta: {
            src: {
                sources: 'templates/',
                scss: 'scss/',
                css: 'css/'
            },
            target: 'target/classes',
            dest: '<%=meta.target%>/templates/',
            handlebarsExt: 'hbs',
            logs: '<%=meta.target%>/log'
        },
        copy: {
            files: {
                src: ['<%= meta.src.sources %>/**/**.hbs']
            },
            options: {
                dest: '<%=meta.dest%>'
            }
        },
        handlebars: {
            compile: {
                files: gruntSupport.getFileMap('templates', 'hbs')
            },
            options: {
                namespace: false,
                amd: true,
                processName: function(filePath) {
                    return filePath.replace("target/classes", "");
                }
            }
        },

       compass: {
            dist: {
                options: {
                    sassDir: '<%= meta.src.scss %>',
                    cssDir: '<%= meta.src.css %>'
                }
            }
        },

        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: false
                }
            },

            templates: {
                files: ['templates/**/*.hbs'],
                tasks: ['handlebars'],
                options: {
                    spawn: false
                }
            }
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },

            dev: {
                tasks: ['watch:css', 'watch:templates']
            }
        } 
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');


    grunt.registerTask('dev', ['concurrent:dev']);
}

function GruntSupport(grunt) {

var outExt = "js",
    target = "templates";

    function getFileMap(baseDir, ext) {
        var sources = {}, key;

        if (!grunt.file.exists(target)) {
            grunt.file.mkdir(target);
        }

        grunt.file.recurse(baseDir, function(abspath, rootdir, subdir, filename) {

            if (filename.substring(filename.length - ext.length) === ext) {
                key = abspath.replace(ext, outExt).replace("templates", target);
                sources[key] = abspath.replace("templates", target);
            }

        });

        return sources;
    };

    return {
        getFileMap: getFileMap
    };
}