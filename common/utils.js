export const findById = (someId, someArray) => {
     // loop over someArray
    for (let i = 0; i < someArray.length; i++) {
        // grab the item at this index
        const thisItem = someArray[i];
      
        // if the item's id matched our id . . 
        if (someId === thisItem.id) {
        // . . . return the item
            return thisItem;
        }   
     }
     return null;
};


export const calcLineItem = (quantity, amount) => {
    return math.Round((quantity * amount) * 100)/100;

   
   

 
}