import renderTableRow from './render-table-row.js';
import rocks, { cart } from '../api.js';
import { findById, makePrettyCurrency, calcOrderTotal } from '../data/utils.js';

const tableElement = document.querySelector('tbody');
const totalCell = document.getElementById('order-total-cell');


for (let i =0; i < cart.length; i++) {
    const lineItem = cart[i];
    const rock = findById(rocks, lineItem.id);
    const dom = renderTableRow(rock, lineItem);

    tableElement.appendChild(dom);
}

    
    let cartTotal = calcOrderTotal(cart, rocks);
    totalCell.textContent = makePrettyCurrency(cartTotal);
    