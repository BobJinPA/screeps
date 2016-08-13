var creeps_helper = require('creeps_helper');
module.exports = {
    spawn: function(creeps){
       var minNumberOfHarvesters = 5;
       var actualNumberOfHarvesters = creeps_helper.count(creeps, 'harvester');
       if (actualNumberOfHarvesters < minNumberOfHarvesters){
           Game.spawns.Spawn1.createCreeps([WORK,WORK,CARRY,MOVE], undefined, {role: 'harvester', working:false});
       } 
    }
}