<script setup lang="ts">
const props = defineProps({
  imgPath: String,
  title: String,
  data: Array,
});
console.log(props);
</script>

<template>
  <div
    class="rounded-[24px] p-[16px] flex gap-[40px] [box-shadow:0px_4px_16px_0px_rgba(0,_0,_0,_0.25)]"
  >
    <img
      alt="warehouse image"
      :src="imgPath"
      class="w-[201px] h-[256px] rounded-[8px] object-cover filter brightness-[80%]"
    />
    <div>
      <p class="text-[24px] font-bold">{{ title }}</p>
      <ul>
        <li v-for="(item, index) in data" :key="index" class="list-disc">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
