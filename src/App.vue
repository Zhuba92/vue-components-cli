<template>
  <div id="app">
    <div class="row">
      <div class="container flex">
        <b-form-input v-on:keyup.enter="searchItems()" type="text" placeholder="Search" v-model="searchTerm"></b-form-input>
      </div>
      <bag :bag="library.bag" @check-out-bag="checkOutBag"></bag>
      <Library :library="library"></Library>
    </div>
  </div>
</template>

<script>
import Library from "@/components/Library";
import LibraryCollection from "@/models/Library";
//import {Album, Book, Movie} from "@/models/LibraryItems";
import Bag from "@/components/Bag";
import axios from "axios";
//import MediaFactory from "@/models/MediaFactory";

export default {
  name: 'App',

  data(){
    return {
      //library: libraryCollection
      library: new LibraryCollection(),
          // .addItem(new Book('Interaction Design', 200))
          // .addItem(new Movie('Paw Patrol!', 78))
          // .addItem(new Movie('Harriet', 122))
          // .addItem(new Book('Brown Bear, Brown Bear', 0))
          // .addItem(new Album('Master of Puppets', 'Metallica', 8))
          // .addItem(new Album('Dookie', 'Green Day', 14)),

      searching: true,
      searchTerm: '',
      searchResults: new LibraryCollection(),
    }
  },

  methods: {
    checkOutBag() {
      this.library.bag.forEach(
        b => {
          if (this.library.some(i => i.id === b.id)) {
            this.library.find(i => i.id === b.id).checkOut();
          }
        })
      this.library.bag.length = 0;
      },

    searchItems() {
      //var mediaFactory = new MediaFactory();

      if(this.searchTerm){
        this.searchResults = new LibraryCollection();
        this.searching = true;
        let url = 'https://itunes.apple.com/search';
        let config = {
          params:{
            term: this.searchTerm,
            limit: 10,
          },
          // header
        }

        axios.get(url, config)
          .then((response) => {
            console.log(response)
            if(response.data.results.length){
              //this.searchResults = new LibraryCollection(response.data.items);
              for (let i = 0; i < response.data.results.length; i++)
              {
                //let item = mediaFactory.create(response.data.results[i]);
                this.searchResults.addItem(response.data.results[i]);
                //this.library.addItem(item)
              }

            }
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            this.searching = false;
            //this.display()
          })
      }
    }
  },

  components: {
    Library,
    Bag,
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: darkgrey;
}
</style>
