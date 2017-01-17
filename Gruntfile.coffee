module.exports = (grunt) ->
  require('load-grunt-tasks') grunt

  grunt.initConfig
    less:
      development:
        options:
          paths: []
        files:
          'app/styles/css/styles.css': 'app/styles/less/main.less'
    watch:
      less:
        files:
          'app/styles/less/main.less'
        tasks: ['less']
    pkg: grunt.file.readJSON 'package.json'

  grunt.registerTask 'default', ['less']
