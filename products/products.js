import carList from "../data/cars.js";

import createProducts from "./renderProducts.js"

const listItems = document.getElementById('placeHere');

for (let i = 0; i < carList.length; i++) {
    const car = carList[i];
    const putOnDom = createProducts(car);
    listItems.appendChild(putOnDom);
};
