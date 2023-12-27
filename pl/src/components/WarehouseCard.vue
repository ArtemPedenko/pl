<script setup lang="ts">
const props = defineProps({
  imgPath: String,
  title: String,
  data: String[],
});
console.log(props);
</script>

<template>
  <div class="w-full h-full rounded-[24px] p-[16px] flex gap-[40px]">
    <img
      alt="warehouse image"
      :src="imgPath"
      class="w-[201px] h-[256px] rounded-[8px] object-cover filter brightness-[80%]"
    />
    <div>asd</div>
  </div>
</template>
