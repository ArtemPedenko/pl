<script setup lang="ts">
import { ref } from "vue";

const accordionRef = ref(0);
function accordionHandler() {
  if (accordionRef.value !== 2 && accordionRef.value !== 0) {
    accordionRef.value = 2;
  } else {
    accordionRef.value = 1;
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="flex justify-between">
      <div class="w-full font-bold text-[22px] border-b border-white py-[24px]">
        <slot name="question"></slot>
      </div>
      <div class="cursor-pointer flex justify-center items-center">
        <img
          v-if="accordionRef === 1"
          @click="accordionHandler"
          alt="asd"
          src="@/assets/close.svg"
          width="40"
          height="40"
        />
        <img
          v-else
          @click="accordionHandler"
          alt="asd"
          src="@/assets/add.svg"
          width="40"
          height="40"
        />
      </div>
    </div>
    <div
      :class="
        accordionRef === 0 ? 'hidden' : accordionRef === 1 ? 'open' : 'close'
      "
      class="overflow-hidden w-full"
    >
      <slot name="info"></slot>
    </div>
  </div>
</template>

<style scoped>
@keyframes open {
  0% {
    max-height: 0;
  }

  100% {
    padding-top: 20px;
    max-height: 400px;
  }
}

@keyframes close {
  0% {
    padding-top: 20px;
    max-height: 400px;
  }

  100% {
    max-height: 0;
    display: none;
  }
}
.open {
  animation: open 0.5s ease-in-out forwards;
}
.close {
  animation: close 0.5s ease-in-out forwards;
}
</style>
