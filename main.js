var runner = require('runner');
var spawner = require('spawner');

module.exports.loop = function () {
    var creeps = Game.creeps;
    //killall(creeps);
    runner.run(creeps);
    spawner.spawn(creeps);
}

function killall(creeps) {
    for (var i in creeps) {
        creeps[i].suicide(); // lemmings style!

    }
}