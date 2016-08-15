var role_helper = require('role_helper');
var creeps_helper = require('creeps_helper');

module.exports = {
    run: function (creep) {
        role_helper.set_working_status(creep);
        if (creep.memory.working == true) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }
        }
        else {
            creeps_helper.get_power(creep);
        }

    }
};