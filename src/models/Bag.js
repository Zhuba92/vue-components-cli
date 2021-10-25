import {LibraryItem} from "./LibraryItems";

function Bag(){
    this.__proto__ = [];
    this.length = 0;// as of ES6 (2015)

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

        this.removeItem = function(item){
            console.log(item, this);
            this.splice(this.indexOf(item), 1);

            return this;
        }

        this.checkOutBag = function(){
            return this;
        }

        // allows us to chain methods
        return this;
    };

    return this;
}

export default Bag;