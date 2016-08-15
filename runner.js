var roleBuilder = require('roleBuilder');
var roleHarvester = require('roleHarvester');
var roleUpgrader = require('roleUpgrader');
var roleAttacker = require('roleAttacker');

module.exports = {
    run: function (creeps) {
        for (let name in creeps) {
            var creep = creeps[name];
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            }
            else if (creep.memory.role == 'upgrader') {
                roleUpgrader.run(creep);
            }
            else if (creep.memory.role == 'builder') {
                roleBuilder.run(creep);
            }
            else if (creep.memory.role == 'attacker') {
                roleAttacker.attack(creep);
            }
        }
    }
}