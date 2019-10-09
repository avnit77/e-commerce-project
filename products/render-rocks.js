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
    pTag.appendChild(myButton);

    return rockElement;
};