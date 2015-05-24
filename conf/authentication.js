module.exports = {
  coap: {
    /**
     * @param {Object} req The incoming message @link https://github.com/mcollina/node-coap#incoming
     * @param {Function} callback The callback function. Has the following structure: callback(error, authenticated, subject)
     */
    authenticate: function(req, callback) {
      // Examples: 
      //   Error:             callback(error); 
      //   Authenticated:     callback(null, true, { username: 'someone' }); 
      //   Not authenticated: callback(null, false); 
    },
    /**
     * @param {Object} subject The subject returned by the authenticate function
     * @param {string} topic The topic
     * @param {Function} callback The callback function. Has the following structure: callback(error, authorized)
     */
    authorizeGet: function(subject, topic, callback) {
      // Examples: 
      //   Error:          callback(error); 
      //   Authorized:     callback(null, true); 
      //   Not authorized: callback(null, false); 
    },
    /**
     * @param {Object} subject The subject returned by the authenticate function
     * @param {string} topic The topic
     * @param {Buffer} payload The payload
     * @param {Function} callback The callback function. Has the following structure: callback(error, authorized)
     */
    authorizePut: function(subject, topic, payload, callback) {
      // Examples: 
      //   Error:          callback(error); 
      //   Authorized:     callback(null, true); 
      //   Not authorized: callback(null, false); 
    }
  },
  http: {
    /**
     * @param {Object} req The request object
     * @param {Function} callback The callback function. Has the following structure: callback(error, authenticated, subject)
     */
    authenticate: function(req, callback) {
      // See coap.authenticate 
    },
    /**
     * @param {Object} subject The subject returned by the authenticate function
     * @param {string} topic The topic
     * @param {Function} callback The callback function. Has the following structure: callback(error, authorized)
     */
    authorizeGet: function(subject, topic, callback) {
      // See coap.authorizeGet 
    },
    /**
     * @param {Object} subject The subject returned by the authenticate function
     * @param {string} topic The topic
     * @param {string} payload The payload
     * @param {Function} callback The callback function. Has the following structure: callback(error, authorized)
     */
    authorizePut: function(subject, topic, payload, callback) {
      // See coap.authorizePut 
    }
  },
  mqtt: {
    /**
     * @link https://github.com/mcollina/mosca/wiki/Authentication-&-Authorization
     */
    authenticate: function(client, username, password, callback) {
      // ... 
    },
    authorizePublish: function(client, topic, payload, callback) {
      // ... 
    },
    authorizeSubscribe: function(client, topic, callback) {
      // ... 
    }
  }
}
