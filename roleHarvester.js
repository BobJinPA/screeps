var role_helper = require('role_helper');
var creeps_helper = require('creeps_helper');

module.exports = {
    run: function (creep) {
        role_helper.set_working_status(creep);
        if (creep.memory.working == true) {
            if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        }
        else {
            creeps_helper.get_power(creep);
        }

    }
};