<script setup lang="ts">
const props = defineProps({
  link: String,
});
</script>

<template>
  <a
    :href="link"
    class="h-full w-full bg-[#0EBC05] rounded-[100px] px-[20px] flex justify-center items-center hover:bg-[#009900] cursor-pointer"
  >
    <slot></slot>
  </a>
</template>
