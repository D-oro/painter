const Room = function(area){
    this.area = area
    this.painted = []
}

Room.prototype.isItPainted = function(){
    if (this.painted.length > 0){
        return 'It is painted'
    } else {
        return 'Not painted'
    }
    } 

Room.prototype.hasBeenPainted = function(){
    this.painted.push(1)
    return this.isItPainted()
}


module.exports = Room;