'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));
var railsUjs = require('rails-ujs');

axios.defaults.headers.common['X-CSRF-Token'] = railsUjs.csrfToken();

module.exports = axios;
