<template>
  <div>
    <h3 class="card-title">Track name: {{item.trackName}}</h3>
    <p class="card-text">Artist: {{item.artistName}} <br>Kind: {{item.kind}}</p>
    <b-img src="item.artworkUrl100"></b-img>
  </div>
</template>

<script>
import {All} from "@/models/LibraryItems";

export default {
  name: "All",
  props: {
    item: All
  }
}
</script>

<style scoped>

</style>