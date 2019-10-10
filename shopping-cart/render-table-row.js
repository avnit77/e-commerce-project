import { makePrettyCurrency } from '../data/utils.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export default (rock, order) => {
    const tableRow = document.createElement('tr');
    const totalPrice = order.quantity * rock.price;
    const prettyPrice = makePrettyCurrency(rock.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    const columnOne = makeTd(rock.name);
    const columnTwo = makeTd(order.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);
    
    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};
