<script setup lang="ts">
import { ref } from "vue";

const accordeonRef = ref(0);
function accordeonHandler() {
  if (accordeonRef.value !== 2 && accordeonRef.value !== 0) {
    accordeonRef.value = 2;
  } else {
    accordeonRef.value = 1;
  }
}
</script>

<template>
  <div class="w-full flex flex-col">
    <div class="flex justify-between">
      <div class="w-full font-bold text-[22px] border-b border-white py-[24px]">
        <slot name="question"></slot>
      </div>
      <div class="cursor-pointer">
        <img
          v-if="accordeonRef === 1"
          @click="accordeonHandler"
          alt="asd"
          src="@/assets/close.svg"
          width="40"
          height="40"
        />
        <img
          v-else
          @click="accordeonHandler"
          alt="asd"
          src="@/assets/add.svg"
          width="40"
          height="40"
        />
      </div>
    </div>
    <div
      :class="
        accordeonRef === 0 ? 'hidden' : accordeonRef === 1 ? 'open' : 'close'
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
    height: 0;
  }

  100% {
    padding-top: 20px;
    height: 150px;
  }
}

@keyframes close {
  0% {
    padding-top: 20px;
    height: 150px;
  }

  100% {
    height: 0;
    display: none;
  }
}
.open {
  animation: open 1s ease forwards;
}
.close {
  animation: close 1s ease forwards;
}
</style>
