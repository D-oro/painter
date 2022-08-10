const Paint = function(volume){
    this.volume = volume;
}

Paint.prototype.isAnyLeft = function(){
    if (this.volume === 0) {
        return 'No paint left'
    } else {
        return 'Yes, there is paint left'
    }
}

Paint.prototype.paintHasBeenUsed = function(liters){
    startPaint = this.volume;
    if (this.volume >= liters) {
        startPaint - liters
    } else console.log('not enough paint')
    return startPaint - liters
}



module.exports = Paint;