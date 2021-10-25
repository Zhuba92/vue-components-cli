<template>
  <div class="container mb-5">
    <h1>Bag</h1>
    <div >
      <library-item v-for="(item, i) in bag" :item="item" :key="i"></library-item>
    </div>
    <button class="btn btn-primary mt-1" @click="bag.checkOutBag">Check out</button>
  </div>
</template>

<script>

import LibraryItem from "@/components/LibraryItem";

export default {
  name: "Bag",

  props: {
    bag: Object,
  },

  components: {
    LibraryItem
  },
}
</script>

<style scoped>
h1 {
  margin-top: 10px
}
</style>