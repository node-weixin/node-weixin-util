'use strict';
module.exports = {
  getNonce: function (length) {
    length = length || 32;
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var pos = chars.length;
    var nonces = [];
    var i;
    for (i = 0; i < length; i++) {
      nonces.push(chars.charAt(Math.floor(Math.random() * pos)));
    }
    return nonces.join('');
  },
  /**
   * Marshalling params
   *
   * @param params
   * @returns {string}
   */
  toParam: function (params) {
    params = params || {};
    var keys = [];
    for (var k in params) {
      keys.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k]));
    }
    return keys.join('&');
  }
};
