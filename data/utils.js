// import rocks from '../api.js';
export const makePrettyCurrency = (number) =>
    number
        .toLocaleString(
            'en-US',
            {
                style: 'currency',
                currency: 'USD',
            });

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.id === id) {
            return item;
        } 
    }
    return null;
}

export function calcLineTotal(quantity, price) {
    return quantity * price;
}

export function calcOrderTotal(cart, rocks) {

    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const rock = findById(rocks, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, rock.price);
        orderTotal += lineTotal;
    }
//see notes for another option

    return makePrettyCurrency(orderTotal);
}