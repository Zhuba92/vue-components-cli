<template>
  <div>
    <h3 class="card-title">Track name: {{item.trackName}}</h3>
      <p class="card-text">Artist: {{item.artistName}}</p>
    <v-img src="{{item.artworkUrl}}"></v-img>
  </div>
</template>

<script>
import {Music} from "@/models/LibraryItems";

export default {
  name: "Music",
  props: {
    item: Music
  }
}
</script>

<style scoped>

</style>