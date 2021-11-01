<template>
<!--  <div class="movie">-->
<!--    <h3 class="card-title">{{item.title}}</h3>-->
<!--    <p class="card-text">Running Time: {{item.runningTime}}</p>-->
<!--  </div>-->
  <div>
    <h3 class="card-title">Track name: {{item.trackName}}</h3>
    <p class="card-text">Artist: {{item.artistName}} <br>Kind: {{item.kind}}<br></p>
    <b-img :src="item.artworkUrl100"></b-img>
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