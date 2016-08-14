module.exports = {
    killall: function () {
        for (var i in Game.creeps) {
            Game.creeps[i].suicide(); // lemmings style!
        }
    },
    clean: function () {
        for (var name in Memory.creeps) {
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }
    },
    count: function (creeps, type) {
        var counter = 0;
        for (let index in creeps) {
            if (creeps[index].memory.role == type) {
                counter++;
            }
        }
        return counter;
    }
}