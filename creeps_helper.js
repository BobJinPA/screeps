module.exports = {
    count: function (creeps, type) {
        var counter = 0;
        for (let index in creeps){
            if (creeps[index].memory.role == type){
                counter ++;
            }
        }
        return counter;
    }
}