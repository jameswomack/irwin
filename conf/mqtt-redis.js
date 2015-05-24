module.exports = {
  persistence: {
    // same as http://mcollina.github.io/mosca/docs/lib/persistence/redis.js.html 
    type: "redis",
    host: "localhost"
  },
  broker: {
    // same as https://github.com/mcollina/ascoltatori#mqtt 
    type: "mqtt",
    port: "2883",
    host: "womack.io"
  },
  logger: {
    level: 20,
    name: "Config Test Logger"
  }
};
