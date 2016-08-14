var roleBuilder = require('roleBuilder');
var roleHarvester = require('roleHarvester');
var roleUpgrader = require('roleUpgrader');

module.exports = {
    run: function (creeps) {
        for (let name in creeps) {
            // get the creep object
            var creep = creeps[name];

            // if creep is harvester, call harvester script
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            else if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            else if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            // else if (creep.memory.role == 'guard') {
            //     roleGuard.run(creep);
            // }
        }
    }
}