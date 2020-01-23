export const findById = (someId, someArray) => {
     // loop over someArray
    for (let i = 0; i < someArray.length; i++) {
        // grab the item at this index
        const thisItem = someArray[i];
      
        // if the item's id matched OUR id . . 
        if (someId === thisItem.id) {
        // . . . return the item
            return thisItem;
        }
            else 
            return null;
     }
};
