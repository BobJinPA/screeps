var runner = require('runner');

module.exports.loop = function () {
    var creeps = Game.creeps;
    runner.run(creeps);
}