module.exports = {
    run: function (creep) {
        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
        }

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {
            // try to transfer energy, if the spawn is not in range
            if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards the spawn
                creep.moveTo(Game.spawns.Spawn1);
            }
}
        else {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }

    }
};