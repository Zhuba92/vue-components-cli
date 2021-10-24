<template>
  <div class="album">
    <h3 class="card-title">{{item.title}}</h3>
    <p class="card-text">Artist: {{item.artist}} Track count: {{item.trackCount}}</p>
  </div>
</template>

<script>
import {Album} from "@/models/LibraryItems";

export default {
  name: "Album",
  props: {
    item: Album
  },
}
</script>

<style scoped>

</style>