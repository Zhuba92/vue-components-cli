<template>
  <div id="app">
    <div class="row">
      <bag :bag="library.bag"></bag>
      <Library :library="library"></Library>
    </div>
  </div>
</template>

<script>
import Library from "@/components/Library";
import LibraryCollection from "@/models/Library";
import {Album, Book, Movie} from "@/models/LibraryItems";
import Bag from "@/components/Bag";

export default {
  name: 'App',

  data(){
    return {
      //library: libraryCollection
      library: new LibraryCollection()
          .addItem(new Book('Interaction Design', 200))
          .addItem(new Movie('Paw Patrol!', 78))
          .addItem(new Movie('Harriet', 122))
          .addItem(new Book('Brown Bear, Brown Bear', 0))
          .addItem(new Album('Master of Puppets', 'Metallica', 8))
          .addItem(new Album('Dookie', 'Green Day', 14))
    }
  },

  components: {
    Library,
    Bag
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
