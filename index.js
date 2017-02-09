/* eslint-env node */
'use strict';

var FlowCLI = require('flow-bin/cli');

module.exports = {
  name: 'ember-cli-flowtype',
  init: function(app) {
    this._super.init && this._super.init.apply(this, arguments);
    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    // Enable `nonStandard` to support flow
    // Side-effect: It makes babel also support JSX
    this.options.babel.nonStandard = true;
  }
};
