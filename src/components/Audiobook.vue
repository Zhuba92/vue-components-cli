<template>
  <div>
    <h3 class="card-title">Collection name: {{item.collectionName}}</h3>
    <p class="card-text">Artist: {{item.artistName}} <br>Kind: {{item.kind}}</p>
    <b-img src="item.artworkUrl100"></b-img>
  </div>
</template>

<script>
import {Audiobook} from "@/models/LibraryItems";

export default {
  name: "Audiobook",
  props: {
    item: Audiobook
  },
}
</script>

<style scoped>

</style>