var runner = require('runner');
var spawner = require('spawner');

module.exports.loop = function () {
    var creeps = Game.creeps;
    //killall(creeps);
    clean();
    runner.run(creeps);
    spawner.spawn(creeps);
}

function killall(creeps) {
    for (var i in creeps) {
        creeps[i].suicide(); // lemmings style!

    }
}

function clean(){
    for (var name in Memory.creeps){
        console.log('nope');
        if(!Game.creeps[name]){
            console.log('yep');
            delete Memory.creeps[name];
        }
    }
}