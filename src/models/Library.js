// The 'Model' is responsible for managing the data of the application.
// You can define your models in the 'data' section of each Vue component
// or define them separately if they might be used by multiple components.

// Models are usually prototypes (similar to classes if you are familiar with those)

import {LibraryItem} from './LibraryItems'
import Bag from './Bag'

function LibraryCollection(){
    this.__proto__ = []; // as of ES6 (2015)

    this.bag = new Bag();

    this.addItem = function(item){
        this.push(new LibraryItem(
            item,

            ((collection) => function(){
                collection.removeItem(this); // "this" refers to the LibraryItem
            })(this), // "this" refers to the array/collection

            ((collection) => function () {
                collection.addToBag(this);
            })(this.bag),
        ));

        // allows us to chain methods
        return this;
    };

    this.checkedOutItems = function(){
        return this.filter(function(item){
            return !item.isAvailable();
        })
    }

    this.removeItem = function(item){
        console.log(item, this);
        this.splice(this.indexOf(item), 1);

        return this;
    }

    return this;
}
// current and pre-ES6
LibraryCollection.prototype = [];
LibraryCollection.prototype.constructor = LibraryCollection;

export default LibraryCollection;