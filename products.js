import rocks from './data/rocks';
import renderRocks from './render-rocks';

const list = document.getElementById('rocks');

for (let i = 0; i < rocks.length; i++) {
    const rock = rocks[i];
    const dom = renderRocks(rock);
    list.appendChild(dom);
}

