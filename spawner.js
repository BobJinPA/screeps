var creeps_helper = require('creeps_helper');

module.exports = {
    spawn: function (creeps) {
        var minNumberOfHarvesters = 5;
        var actualNumberOfHarvesters = creeps_helper.count(creeps, 'harvester');
        var minNumberOfUpgraders = 5;
        var actualNumberOfUpgraders = creeps_helper.count(creeps, 'upgrader');
        var minNumberOfBuilders = 5;
        var actualNumberOfBuilders = creeps_helper.count(creeps, 'builder');
        
        if (actualNumberOfHarvesters < minNumberOfHarvesters) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'harvester', working: false });
        }
        else if (actualNumberOfUpgraders < minNumberOfUpgraders) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'upgrader', working: false });
        }
        else if (actualNumberOfBuilders < minNumberOfBuilders) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'builder', working: false });
        }
    }
}