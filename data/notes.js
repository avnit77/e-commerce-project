//Just some sweet notes
// export function calcOrderTotal(cart, rocks) {

//     let orderTotal = 0;

//     for (let i = 0; i < cart.length; i++) {
//         const lineItem = cart[i];
//         const rock = findById(rocks, lineItem.id);
//         const lineTotal = calcLineTotal(lineItem.quantity, rock.price);
//         orderTotal += lineTotal;
//     }

//     //could also handle with forEach:
//     // cart.forEach(lineItem => {
//     //     cont rock = findById(product, lineItem.id);
//     //     const lineTotal = calcLineItem(lineItem.quantity, plant.price);
//     //     orderTotal+=lineTotal
//     // });

//     return makePrettyCurrency(orderTotal);
// }