import rocks from './data/rocks.js';
import renderRocks from './render-rocks.js';

const list = document.getElementById('rocks');

for (let i = 0; i < rocks.length; i++) {
    const rock = rocks[i];
    const dom = renderRocks(rock);
    list.appendChild(dom);
}

