/* eslint-env node */
var RSVP = require('rsvp');

function _modifyESLintConfiguration() {
  return new RSVP.Promise(function(resolve, reject) {
    resolve();
  });
}

module.exports = {
  description: 'Configuring Flowtype',
  afterInstall: function(options) {
    if ('ember-cli-eslint' in this.project.dependencies()) {
      return RSVP.all([
        this.addPackagesToProject({
          packages: [
            {
              name: 'babel-eslint',
              target: '*'
            },
            {
              name: 'eslint-plugin-flowtype',
              target: '*'
            }
          ]
        }),
        _modifyESLintConfiguration()
      ])
    } else {
      return RSVP.resolve();
    }
  }
};
