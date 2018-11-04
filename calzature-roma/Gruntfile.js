module.exports = function(grunt){
  grunt.initConfig({
    less: {
      dev: {
        files: {
          'src/dev/css/style.css': 'src/dev/less/style.less'
        }
      }
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'src/dist/css/style.min.css': 'src/dev/css/style.css'
        }
      }
    },

    browserify: {
      dist: {
        files: {
          'src/dev/js/compiled/bundle.js': 'src/dev/js/main.js'
        }
      }
    },

    babel: {
      options: {
        presets: ['env']
      },
      dist: {
        files: {
          'src/dev/js/compiled/bundle-es5.js': 'src/dev/js/compiled/bundle.js'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'src/dist/js/main.min.js': 'src/dev/js/compiled/bundle-es5.js'
        }
      }
    },

    watch: {
      less: {
        files: 'src/dev/less/*.less',
        tasks: 'less'
      },
      browserify: {
        files: 'src/dev/js/main.js',
        tasks: 'browserify'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.task.registerTask('dev', ['less','browserify','watch']);
  grunt.task.registerTask('build', ['cssmin','babel','uglify']);
}
