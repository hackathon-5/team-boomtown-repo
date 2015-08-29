module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    coffee: {
      files: []
    },
    watch: {
      glob_to_multiple: {
        expand: true,
        flatten: false,
        cwd: 'client/js/**',
        src: ['*.coffee'],
        dest: 'client/js/**',
        ext: '.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-loopback-sdk-angular');

  grunt.registerTask('default','watch');
}

