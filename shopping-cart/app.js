import renderTableRow from './render-table-row.js';
import rocks from '../api.js';
import { findById, makePrettyCurrency, calcOrderTotal } from '../data/utils.js';

const tableElement = document.querySelector('tbody');
const totalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order-button');

const json = localStorage.getItem('CART');
let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const rock = findById(rocks, lineItem.id);
    const dom = renderTableRow(rock, lineItem);

    tableElement.appendChild(dom);
}

let cartTotal = calcOrderTotal(cart, rocks);
totalCell.textContent = makePrettyCurrency(cartTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}