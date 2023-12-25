<script setup lang="ts">
const props = defineProps({
  pad: String,
});
console.log(props);
</script>

<template>
  <div
    :class="[
      props.pad ? `pr-[120px]` : 'pr-[80px]',
      'pl-[24px] py-[24px] flex flex-col gap-4 h-full bg-white rounded-2xl',
    ]"
  >
    <p class="text-[22px] font-bold">
      <slot name="heading"></slot>
    </p>
    <p class="text-[18px]">
      <slot name="paragraph"></slot>
    </p>
    <div>
      <slot name="icon"></slot>
    </div>
  </div>
</template>
