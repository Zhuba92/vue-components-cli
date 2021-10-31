<template>
  <div class="container">
    <div class="card mt-3" :class="item.isAvailable() ? 'border-success' : 'border-warning'" style="border-width: 3px;">
      <!--                <h3 class="card-title">{{item.title}}</h3>-->
      <!--                <p class="card-text" v-if="item.constructor.name == 'Book'">Pages: {{item.pages}}</p>-->
      <!--                <p class="card-text" v-if="item.runningTime">Running Time: {{item.runningTime}}</p>-->
      <div class="card-body">
        <component :is="typeOfItem" :item="item"></component>
      </div>
      <div class="card-footer">
        <button @click="item.checkOut()" class="btn btn-secondary">Check Out</button>
        <button @click="item.checkIn()" class="btn btn-secondary">Check In</button>
        <button @click="item.remove()" class="btn btn-warning">Remove Me</button>
        <button @click="item.addToBag(item)" class="btn btn-secondary">Add to Bag</button>
      </div>
    </div>
  </div>
</template>

<script>
import Book from '../components/Book';
import Movie from "./Movie";
import Album from "./Album";
import {Music} from "@/models/LibraryItems";
export default {
  name: "LibraryItem",
  components: {
    Book,
    Movie,
    Album,
    Music
  },
  props: {
    item: Object
  },
  computed: {
    typeOfItem(){
      return this.item.constructor.name;
    }
  },
}
</script>

<style scoped>

.btn {
  margin-right: 3px;
}

</style>