import { findById } from "../common/utils.js";
// import carList from '../data/cars.js';

export default function createProducts(car) {
  const li = document.createElement("li");

  const img = document.createElement("img");
  img.src = car.image;
  img.alt = car.name + " image";
  li.appendChild(img);

  const h2 = document.createElement("h2");

  h2.textContent = car.name;
  li.appendChild(h2);

  const p = document.createElement("p");

  p.textContent = car.description;
  li.appendChild(p);

  const aside = document.createElement("aside");

  aside.textContent = car.category;
  li.appendChild(aside);

  const h4 = document.createElement("h4");

  h4.textContent = car.price;
  li.appendChild(h4);

  const button = document.createElement("button");
  button.textContent = "Select";
  button.value = car.id;

  button.addEventListener("click", () => {
    const cartJson = localStorage.getItem("SHOPPINGCART");
    let shoppingCart = [];
    const lineItem = {
      id: car.id,
      quantity: 1
    };

    if (cartJson) {
      shoppingCart = JSON.parse(cartJson);
      let existingLineItem = findById(shoppingCart, car.id);

      if (existingLineItem) {
        const lineItemIndex = shoppingCart.indexOf(existingLineItem);
        shoppingCart[lineItemIndex].quantity++;
      }
      else {
        shoppingCart.push(lineItem);
      }
    }
    else {
      shoppingCart.push(lineItem);
    }

    localStorage.setItem("SHOPPINGCART", JSON.stringify(shoppingCart));
  });

  li.appendChild(button);

  return li;
}
