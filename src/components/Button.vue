<script setup lang="ts">
const props = defineProps({
  link: String,
});
</script>

<template>
  <a
    :href="link"
    class="h-full w-full bg-[#0EBC05] rounded-[100px] px-[80px] flex justify-center items-center"
  >
    <slot></slot>
  </a>
</template>
