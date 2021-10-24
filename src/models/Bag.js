import {LibraryItem} from "./LibraryItems";

function Bag(){
    this.__proto__ = []; // as of ES6 (2015)

    this.addToBag = function(item){
        this.push(new LibraryItem(
            item,

            ((collection) => function(){
                collection.removeItem(this); // "this" refers to the LibraryItem
            })(this), // "this" refers to the array/collection

            ((collection) => function () {
                collection.addToBag(this);
            })(this),
        ));

        // allows us to chain methods
        return this;
    };

    return this;
}

export default Bag;