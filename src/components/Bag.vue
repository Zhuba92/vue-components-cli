<template>
  <div class="container mt-5 mb-5">
    <h1>Bag</h1>
    <div >
      <library-item v-for="(item, i) in bag" :item="item" :key="i">
        <p>{{item.title}}</p>
      </library-item>
    </div>
    <button>Check out</button>
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

</style>