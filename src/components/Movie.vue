<template>
  <div class="movie">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Running Time: {{item.runningTime}}</p>
  </div>
</template>

<script>
import {Movie} from "@/models/LibraryItems";

export default {
  name: "Movie",
  props: {
    item: Movie
  },
}
</script>

<style scoped>

</style>