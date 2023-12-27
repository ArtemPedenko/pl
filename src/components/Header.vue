<script setup lang="ts">
const links = [
  { title: "Преимущества", ref: "/#profits" },
  { title: "Вопросы", ref: "/#questions" },
  { title: "Регистрация", ref: "/#reqistration" },
];
</script>
<template>
  <header
    class="max-w-[1200px] h-[80px] m-auto flex items-center justify-between text-sm"
  >
    <a href="/">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="180"
        height="37"
      />
    </a>
    <nav>
      <div
        class="self-center flex justify-between gap-5 my-auto items-start font-bold"
      >
        <ul>
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
  </header>
</template>
