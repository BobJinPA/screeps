var runner = require('runner');
var spawner = require('spawner');

module.exports.loop = function () {
    var creeps = Game.creeps;
    runner.run(creeps);
    spawner.spawn(creeps);
}