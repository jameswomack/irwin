module.exports = {
  persistence: {
    // same as http://mcollina.github.io/mosca/docs/lib/persistence/redis.js.html 
    type: "redis",
    host: "localhost"
  },
  mqtt: {
    port: 1883,
    authenticate: function(client, usernameBuffer, passwordBuffer, callback) {
      var env = process.env;
      console.log(env);
      console.log(usernameBuffer.toString(), env.U, passwordBuffer.toString(), env.P);
      var error = null;
      var payload = client;
      if (!(usernameBuffer.toString() === env.U &&
          passwordBuffer.toString() === env.P)){
            error = new Error('Invalid username & password');
            payload = null;
      }
      return callback(error, payload);
    },
  },
  logger: {
    level: 20,
    name: "irwin"
  }
};
