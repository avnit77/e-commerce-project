import renderRock from '../products/render-rocks.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import rocks, { cart } from '../api.js';
import { findById, calcLineTotal, calcOrderTotal } from '../data/utils.js';



const test = QUnit.test;

QUnit.module('Rocks');

test('renders a rock', assert => {

    const igneous = {
        id: 'igneous',
        class: 'igneous',
        name: 'Igneous Rock',
        image: '../photos/igneous.jpg',
        description: 'Volcano barf',
        category: 'holes',
        price: 1.00,
    };

    const expected = '<li class="holes" title="Volcano barf"><h3>Igneous Rock</h3><img src="../photos/igneous.jpg" alt="Igneous Rock image"><p class="price">$1.00<button value="igneous">I have money and I want a rock</button></p></li>';
    
    // act
    const dom = renderRock(igneous);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test ('renders a shopping cart', assert => {
    
    const igneous = {
        id: 'igneous',
        class: 'igneous',
        name: 'Igneous Rock',
        image: '../photos/igneous.jpg',
        description: 'Volcano barf',
        category: 'holes',
        price: 1.00,
    };

    const igneousOrder = {
        id: 'igneous',
        quantity: 4,
    };

    const expected = '<tr><td>Igneous Rock</td><td>4</td><td>$1.00</td><td>$4.00</td></tr>';

    const rockElementTr = renderTableRow(igneous, igneousOrder);
    const stringHtmlOfRockElement = rockElementTr.outerHTML;

    assert.equal(stringHtmlOfRockElement, expected);

});

export default cart;




test('renders a line item', assert => {
    // arrange
    const lineItem = {
        id: 'igneous',
        quantity: 3
    };
    const igneous = findById(rocks, lineItem.id);
    const expected = '<tr><td>Igneous Rock</td><td>3</td><td>$1.00</td><td>$3.00</td></tr>';

    // act
    const dom = renderTableRow(igneous, lineItem);
    const html = dom.outerHTML;
    
    // assert
    assert.deepEqual(html, expected);
});


test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundRock = findById(rocks, id);


    // assert
    assert.equal(foundRock, expected);
});



test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 2.0;
    const expected = 6.00;

    // act 
    const total = calcLineTotal(quantity, price);
    // assert
    assert.equal(total, expected);
});


test('calculate order total', (assert) => {
    // arrange

    const expected = '$602.00';

    // act
    const orderTotal = calcOrderTotal(cart, rocks);

    // assert
    assert.equal(orderTotal, expected);
});