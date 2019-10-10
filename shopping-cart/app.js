import renderTableRow from './render-table-row.js';
import rocks, { cart } from '../api.js';
import { findById, makePrettyCurrency, calcOrderTotal } from '../data/utils.js';
import { CART_KEY } from '../products/render-rocks.js';

const tableElement = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');



for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const rock = findById(rocks, lineItem.id);
    const dom = renderTableRow(rock, lineItem);

    tableElement.appendChild(dom);
}

let cartTotal = calcOrderTotal(cart, rocks);
orderTotalCell.textContent = makePrettyCurrency(cartTotal);

const addRow = (rockOrder, rocks) => {
    const orderrock = findById(rockOrder.id, rocks);
    const row = renderTableRow(orderrock, rockOrder);

    tableElement.appendChild(row);
};

const addRows = (cart, rocks) => {
    cart.forEach(rockOrder => {
        addRow(rockOrder, rocks);
    });
};

const buildTotalCell = (cart, rocks) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = calcOrderTotal(cart, rocks);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, rocks) => {
    buildTotalCell(cart, rocks);
    addRows(cart, rocks);
};

const javascriptReadableCart = JSON.parse(localStorage.getItem(CART_KEY));
debugger;
buildTable(javascriptReadableCart, dataRocks);
    