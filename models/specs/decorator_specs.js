const assert = require('assert');
const Decorator = require('../decorator.js')

describe('Decorator', function(){
    let decorator;

    beforeEach(function(){
        decorator = new Decorator()
    })

    it('should start with empty stock', function(){
        //act
        const actual = decorator.stock;
        //assert
        assert.deepStrictEqual(actual, [])
    })

it('should be able to add paint to stock', function(){
    //act
    const actual = decorator.addToStock();
    //assert
    assert.deepStrictEqual(actual, )
})

})