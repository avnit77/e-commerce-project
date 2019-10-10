import rocks from '../api.js';
import renderRockElement from './render-rocks.js';


const rockListUl = document.getElementById('rocks');


for (let i = 0; i < rocks.length; i++) {
    const thisRock = rocks[i];
  
    const rockListElement = renderRockElement(thisRock);

    rockListUl.appendChild(rockListElement);
}

