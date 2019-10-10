import { findById } from '../data/utils.js';

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
    myButton.value = rock.id;
    myButton.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }
       
        let lineItem = findById(cart, rock.id);
        
        if (!lineItem) {
            lineItem = {
                id: rock.id,
                quantity: 1
            };

            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert('1 ' + rock.name + ' added to cart');

    });

    pTag.appendChild(myButton);

    return rockElement;
};