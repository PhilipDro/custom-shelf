module.exports = (grunt) ->
  require('load-grunt-tasks') grunt

  grunt.initConfig
    concat:
      options:
        separator: ';\n'
      doYourThing:
        files:
          'app/scripts.js': [
            #'app/*.js'
            'node_modules/rxjs/**/*.js'
            # 'app/app.component.js'
            # 'app/app.module.js'
            # 'app/app.routing.js'
            # 'app/contact.component.js'
            # 'app/email.js'
            # 'app/footer.component.js'
            # 'app/gallery.component.js'
            # 'app/imprint.component.js'
            # 'app/in-memory-data.service.js'
            # 'app/mail.component.js'
            # 'app/mail.service.js'
            # 'app/main.js'
            # 'app/privacy-info.component.js'
            # 'app/shelf-detail.component.js'
            # 'app/shelf.service.js'
            # 'app/shelf.js'
            # 'app/shelves.component.js'
            # 'app/shipping.component.js'
            # 'app/size-form.component.js'
            # 'app/title.component.js'
          ]
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

  grunt.registerTask 'default', ['doYourThing']
  grunt.registerTask 'doYourThing', [
    'concat:doYourThing'
  ]
