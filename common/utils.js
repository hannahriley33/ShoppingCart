import carList from '../data/cars.js';

export const findById = (someArray, itemId) => {
     // loop over someArray
    for (let i = 0; i < someArray.length; i++) {
        // grab the item at this index
        // console.log(someArray.length);
        const thisItem = someArray[i];
      
        // if the item's id matched our id . . 
        if (thisItem.id === itemId) {
        // . . . return the item
            return thisItem;
        }   
     }
     return null;
};


export const calcLineItem = (quantity, amount) => {
    return Math.round((quantity * amount) * 100)/100;

};

export const calcOrderTotal = (shoppingCartArray) => {
    let orderTotal = 0;

    for (let i=0; i<shoppingCartArray.length; i++) {
        const carLineItem = shoppingCartArray[i];
        
        const carSelected = findById(carList, carLineItem.id);
        
        const lineTotal = calcLineItem(carLineItem.quantity, carSelected.price);
        
        orderTotal += lineTotal;
    }
    return orderTotal;
}