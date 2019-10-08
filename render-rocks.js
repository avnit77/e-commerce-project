function renderRock(rock) {
    const li = document.createElement('li');
    li.className = rock.id;
    li.title = rock.description;

    const h3 = document.createElement('h3');
    h3.textContent = rock.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = rock.image;
    img.alt = rock.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = rock.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'I have 1 dollar and I want a rock';
    button.value ='buy';
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderRock;
