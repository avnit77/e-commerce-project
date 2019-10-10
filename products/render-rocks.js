/* eslint-disable no-console */
// import rocks, { cart } from '../api.js';
const emptyCart = [{ id: 'igneous', quantity: 1 }];
export const CART_KEY = 'cart';

export const getById = (id, rocks) => {
    let matchingrock;

    rocks.forEach(rock => {
        if (rock.id === id) {
            matchingrock = rock;
        }
    });

    return matchingrock;
};

export const incrementInCartById = (id, cart) => {
    let thereIsAMatch = false;
    // for each order . . .
    cart.forEach(order => {
        // if you find a match
        if (order.id === id) {
            // increment the quantity
            order.quantity++;
            thereIsAMatch = true;
        }
    });

    if (thereIsAMatch) {
        // break out of jail
        return;
    } else {
        // if you find no match, make a new order
        const newItem = {
            id: id,
            quantity: 1,
        };

        // and put it in the cart
        cart.push(newItem);

    }

};

const initializeEmptyCart = () => {
    const serializedCart = JSON.stringify(emptyCart);

    localStorage.setItem('cart', serializedCart);
};

const getCart = () => JSON.parse(localStorage.getItem(CART_KEY));

const setCart = (currentCartInLocalStorage) => {
    const serializedNewCart = JSON.stringify(currentCartInLocalStorage);
    localStorage.setItem(CART_KEY, serializedNewCart);
};

export default (rock) => {

    const rockElement = document.createElement('li');
    rockElement.className = rock.category;
    rockElement.title = rock.description;

    const someHeader = document.createElement('h3');
    someHeader.textContent = rock.name;
    rockElement.appendChild(someHeader);

    const someImage = document.createElement('img');
    someImage.src = rock.image;
    someImage.alt = rock.name + ' image';

    rockElement.appendChild(someImage);

    const pTag = document
        .createElement('p');

    pTag.className = 'price';
    pTag.textContent = '$' + rock.price.toFixed(2);
    rockElement.appendChild(pTag);

    const myButton = document.createElement('button');

    myButton.textContent = 'I have money and I want a rock';
    //myButton.addEventListener('click', addClickedItemToLocalStorage)
    myButton.value = rock.id;
    myButton.addEventListener('click', () => {
        // we have access to a rock in this function
        // get the current cart in the store
        let currentCartInLocalStorage = getCart();
        // if there is no cart, build me an empty one and then go get it from localStorage
        if (!currentCartInLocalStorage) {
            initializeEmptyCart();
            currentCartInLocalStorage = getCart();
        }

        let rockToIncrement = getById(rock.id, currentCartInLocalStorage);
        rockToIncrement && rockToIncrement.quantity++;
        rockToIncrement && rockToIncrement.quantity++;
        rockToIncrement && rockToIncrement.quantity++;
        rockToIncrement && rockToIncrement.quantity++;
        rockToIncrement && rockToIncrement.quantity++;
        rockToIncrement && rockToIncrement.quantity++;
        rockToIncrement && rockToIncrement.quantity++;
        rockToIncrement && rockToIncrement.quantity++;


        // go into the cart and find this rock. increment its quantity by 1
        // incrementInCartById(rock.id, currentCartInLocalStorage);
        setCart(currentCartInLocalStorage);
    });
    pTag.appendChild(myButton);

    return rockElement;
};