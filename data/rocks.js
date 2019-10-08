const igneous = {
    id: 'igneous',
    name: 'Igneous Rock',
    image: '../photos/igneous.jpg',
    description: 'Volcano barf',
    category: 'rocks with holes',
    price: 1.00,
};

const anthracite = {
    id: 'metamorphic',
    name: 'Shiny Coal',
    image: '../photos/metamorphic.jpg',
    description: 'The fanciest coal',
    category: 'fancy',
    price: 20.00,
};

const expensive = {
    id: 'diamond',
    name: 'Expensive Rock',
    image: '../photos/diamon.gif',
    description: 'for letting people know you have enough money to buy a very expensive rock',
    category: 'fancy',
    price: 500.00,
};

const rocks = [
    igneous,
    anthracite,
    expensive
];

export default rocks;