<script setup lang="ts">
const props = defineProps({
  pad: String,
  imgPath: String,
});
console.log(props);
</script>

<template>
  <div
    :class="[
      pad ? pad : 'pr-[80px]',
      'relative pl-[24px] py-[24px] flex flex-col gap-4 h-full bg-white rounded-2xl',
    ]"
  >
    <p class="text-[22px] font-bold">
      <slot name="heading"></slot>
    </p>
    <p
      class="text-[15px] leading-6 font-normal pr-[5px] [z-index:2] not-italic"
    >
      <slot name="paragraph"></slot>
    </p>
    <img
      alt="profit logo"
      :src="imgPath"
      class="absolute w-[139px] h-[139px] [float:right] bottom-0 right-0 [z-index:1]"
    />
  </div>
</template>
