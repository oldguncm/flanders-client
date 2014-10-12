var grunt = require('grunt');

grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'www/css/style.css': 'scss/main.scss'
      }
    }
  },

  watch: {
    scripts: {
      files: ['scss/**/*.scss'],
      tasks: ['sass'],
      options: {
        spawn: false,
      },
    },
  }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass']);
