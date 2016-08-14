var runner = require('runner');
var spawner = require('spawner');
var creeps_helper = require('creeps_helper');

module.exports.loop = function () {
    var creeps = Game.creeps;
    creeps_helper.clean();
    runner.run(creeps);
    spawner.spawn(creeps);
}

