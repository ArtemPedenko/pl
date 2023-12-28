<script setup lang="ts">
import { ref } from "vue";

import MobileMenu from "./MobileMenu.vue";
const links = [
  { title: "Преимущества", ref: "/#profits" },
  { title: "Вопросы", ref: "/#questions" },
  { title: "Регистрация", ref: "/#reqistration" },
];
const menuState = ref(0);
function accordionHandler() {
  if (menuState.value !== 2 && menuState.value !== 0) {
    menuState.value = 2;
  } else {
    menuState.value = 1;
  }
}
</script>
<template>
  <header class="h-[80px] flex items-center justify-center text-sm relative">
    <div
      class="max-w-[1200px] w-full h-full flex justify-between items-center mx-[20px]"
    >
      <a href="/" class="">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="180"
          height="37"
        />
      </a>
      <nav class="max-md:hidden h-full">
        <div class="h-full font-bold">
          <ul class="h-full flex justify-center items-center">
            <li
              v-for="(item, index) in links"
              :key="index"
              class="inline mx-[10px] hover:underline"
            >
              <a :href="item.ref">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </nav>
      <div @click="accordionHandler" class="max-md:block hidden">
        <img
          v-if="menuState !== 1"
          alt="menu button"
          src="@/assets/mobilemenu.svg"
          width="40"
          height="40"
        />
        <img
          v-else
          alt="menu button"
          src="@/assets/close.svg"
          width="40"
          height="40"
        />
      </div>
    </div>
  </header>
  <MobileMenu
    :state="menuState"
    :linksArray="links"
    class="max-md:block absolute hidden right-0"
  />
</template>
