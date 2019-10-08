
import renderRock from '../render-rocks.js';

const test = QUnit.test;

QUnit.module('Rocks');

test('renders a rock', assert => {
    // arrange
    const igneous = {
        id: 'igneous',
        class: 'igneous',
        name: 'Igneous Rock',
        image: 'photos/igneous.jpg',
        description: 'Volcano barf',
        category: 'holes',
        price: 1.00,
    };

    const expected = '<li class="igneous" title="Volcano barf"><h3>Igneous Rock</h3><img src="photos/igneous.jpg" alt="Igneous Rock image"><p class="price">$1.00<button value="buy">I have 1 dollar and I want a rock</button></p></li>';
    
    // act
    const dom = renderRock(igneous);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});
