<template>
  <div>
    <h3 class="card-title">Track name: {{item.trackName}}</h3>
      <p class="card-text">Artist: {{item.artistName}} <br>Kind: {{item.kind}}</p>
    <b-img :src="item.artworkUrl100"></b-img>
  </div>
</template>

<script>
import {Music} from "@/models/LibraryItems";

export default {
  name: "Music",
  props: {
    item: Music
  },
}
</script>

<style scoped>

</style>