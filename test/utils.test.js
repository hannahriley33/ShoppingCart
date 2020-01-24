// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { findById } from "../common/utils.js"
import carList from "../data/cars.js"
import { calcOrderTotal } from '../common/utils.js'
import cart from '../data/cart.js'

const test = QUnit.test;

test('time to test findById function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const someId = 'jetta';
    const expected = {
        id: 'jetta',
        name: 'VW Jetta',
        image: 'assets/jettaPic.png',
        description: 'A stylish 4 door sedan perfect for suburban living.',
        category: 'sedan',
        price: 24000.00,
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(carList, someId);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});

test('time to test a calcOrderTotal', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const expected1 = 59000;
    //Act 
    // Call the function you're testing and set the result to a const
    const total = calcOrderTotal(carList, cart);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected1, total);
});