var creeps_helper = require('creeps_helper');

module.exports = {
    spawn: function (creeps) {
        var minNumberOfHarvesters = 13;
        var actualNumberOfHarvesters = creeps_helper.count(creeps, 'harvester');
        var minNumberOfUpgraders = 5;
        var actualNumberOfUpgraders = creeps_helper.count(creeps, 'upgrader');
        var minNumberOfBuilders = 5;
        var actualNumberOfBuilders = creeps_helper.count(creeps, 'builder');
        var minNumberOfAttackers = 5;
        var actualNumberOfAttackers = creeps_helper.count(creeps, 'attacker');
        console.log('number of harvester ' + actualNumberOfHarvesters);
        console.log('number of upgrader ' + actualNumberOfUpgraders);
        console.log('number of builders ' + actualNumberOfBuilders);
        console.log('number of attackers ' + actualNumberOfAttackers);


        if (actualNumberOfHarvesters < minNumberOfHarvesters) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'harvester', working: false });
        }
        else if (actualNumberOfUpgraders < minNumberOfUpgraders) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'upgrader', working: false });
        }
        else if (actualNumberOfBuilders < minNumberOfBuilders) {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'builder', working: false });
        }
        else if (actualNumberOfAttackers < minNumberOfAttackers) {
            Game.spawns.Spawn1.createCreep([ATTACK, ATTACK, WORK, CARRY, MOVE], undefined, { role: 'attacker', working: false });
        }
        else {
            Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY, MOVE], undefined, { role: 'builder', working: false });
        }
    }
}