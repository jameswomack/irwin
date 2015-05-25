module.exports = {
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
