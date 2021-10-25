<template>
  <div class="card-columns">
    <div class="card">
      <h1>Checked out: {{library.checkedOutItems().length}}</h1>
    </div>
    <library-item v-for="(item, i) in library"
                  :item="item"
                  :remove-function="function(item){library.removeItem(item)}"
                  :key="i"
    ></library-item>
  </div>
</template>

<script>
// import LibraryCollection from "@/models/Library";
// import {Book, Movie, Album} from "@/models/LibraryItems";
import LibraryItem from "@/components/LibraryItem";

export default {
  name: "Library",

  components: {
    LibraryItem
  },

  props: {
    library: Object,
  },
}
</script>

<style scoped>

h1 {
  font-weight: bold;
}

.card {
  background-color: darkgrey;
  border-style: none;
}

</style>