<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />

  <!-- <div class="">
    <HelloWorld msg="You did it!" />
  </div> -->
  <RouterView />
  <Footer />
</template>
