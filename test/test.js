var Config = require(process.cwd() + '/conf/mqtt-redis')
var Assert = require('assert')

function infoAssert(key) {
  it('should contain information on ' + key, function () {
    Assert.ok(Config[key], 'Config contains ' + key +  ' info')
  })
}

describe('Config', function () {
  ['persistence','mqtt','logger'].forEach(infoAssert)
})
