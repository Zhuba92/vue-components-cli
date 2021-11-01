<template>
  <div>
    <h3 class="card-title">Track name: {{item.trackName}}</h3>
    <p class="card-text">Artist: {{item.artistName}} <br>Kind: {{item.kind}}<br>Feed: {{item.feedUrl}}</p>
    <b-img :src="item.artworkUrl130"></b-img>
  </div>
</template>

<script>
import {Podcast} from "@/models/LibraryItems";
export default {
  name: "Podcast",
  props: {
    item: Podcast
  },
}
</script>

<style scoped>

</style>