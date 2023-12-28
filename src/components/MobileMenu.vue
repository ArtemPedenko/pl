<script setup lang="ts">
type link = {
  ref: string;
  title: string;
};
const props = defineProps({
  linksArray: Array<link>,
  state: Number,
});
</script>

<template>
  <nav>
    <div
      :class="state === 0 ? 'hidden' : state === 1 ? 'open' : 'close'"
      class="bg-white overflow-hidden"
    >
      <ul class="flex flex-col gap-[20px] items-center justify-center">
        <li
          v-for="(item, index) in linksArray"
          :key="index"
          class="inline mx-[10px] hover:underline"
        >
          <a :href="item.ref">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
@keyframes open {
  0% {
    max-height: 0;
  }

  100% {
    padding: 30px;
    max-height: 2000px;
  }
}

@keyframes close {
  0% {
    padding: 30px;
    max-height: 200px;
  }

  100% {
    max-height: 0;
    display: none;
  }
}
.open {
  animation: open 0.3s ease-in-out forwards;
}
.close {
  animation: close 0.3s ease-in-out forwards;
}
</style>
