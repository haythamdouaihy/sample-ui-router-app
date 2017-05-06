'use strict';
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        connect: {
          server: {
            options: {
              livereload: true,
              port: 9009,
              base: '/Users/apple/git/sample-ui-router-app'
            }
          }
        },
        watch: {
          html: {
            files: ['**/*.html', '**/*.html']
          },
          scripts: {
            files: [
              'app/**/*.js',
              'Gruntfile.js'
            ],
            tasks: ['jshint:all', 'jscs:all'],
            options: {
              spawn: false,
            },
          }
        },
        jshint: {
          options: {
            jshintrc: '.jshintrc'
          },
          all: {
            src: [
              'app/**/*.js',
              'Gruntfile.js'
            ]
          },
          test: {
            options: {
              jshintrc: 'test/.jshintrc'
            },
            src: ['test/**/*.js']
          }
        },
        jscs: {
          options: {
            config: '.jscsrc',
            verbose: true
          },
          all: {
            src: [
              'Gruntfile.js',
              'app/**/*.js'
            ]
          },
          test: {
            options: {
              config: 'test/.jshintrc'
            },
            src: [
              'test/**/*.js'
            ]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.registerTask('serve', ['connect']);
    grunt.registerTask('serve', [
      'connect:server',
      'watch'
    ]);

};

