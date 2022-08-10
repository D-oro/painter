const assert = require('assert');
const Room = require('../room.js')

describe('Room', function(){
    let room;

    beforeEach(function(){
        room = new Room(10)
    });

    it('should have an area', function(){
        //act
        const actual = room.area;
        //assert
        assert.strictEqual(actual, 10);
    });

    it('should start not painted', function(){
        const actual = room.isItPainted();
        assert.strictEqual(actual, 'Not painted');
    });

    it('should be paintable', function(){
        const actual = room.hasBeenPainted();
        assert.strictEqual(actual, 'It is painted')
    })
});