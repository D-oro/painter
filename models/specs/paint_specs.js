const assert = require('assert');
const Paint = require('../paint.js')

describe('Paint', function(){
    let paint;

    beforeEach(function(){
        paint = new Paint(5)
    })

    it('should have a volume', function(){
        //act
        const actual =paint.volume;
        //assert
        assert.strictEqual(actual, 5);
    })

    it('is empty or not', function(){
        //act
        const actual = paint.isAnyLeft();
        //assert
        assert.strictEqual(actual, 'Yes, there is paint left')
    })

    it('can reduce volume of paint', function(){
        //act
        const actual = paint.paintHasBeenUsed(1);
        //assert
        assert.strictEqual(actual, 4)
    })
});