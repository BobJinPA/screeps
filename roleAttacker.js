var role_helper = require('role_helper');
var creeps_helper = require('creeps_helper');

module.exports = {
    attack: function (creep) {
        role_helper.set_working_status(creep);
        if (creep.memory.working == true) {


            var enemy = attacker.room.find(Game.HOSTILE_CREEPS);
            if (!enemy == undefined) {
                if (creep.attack(enemy[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(enemy[0]);
                }
            }
            else{
                roleHarvester.run(creep);
            }

        }
        else {
            creeps_helper.get_power(creep);
        }

    }
};

