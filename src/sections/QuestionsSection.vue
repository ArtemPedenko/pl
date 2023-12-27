<script setup lang="ts">
import AccorderonSection from "@/components/AccorderonSection.vue";

const questions = [
  "Какие документы нужны для оформления?",
  "Когда выплачивается заработная плата?",
  "Есть ли система штрафов?",
  "Когда я могу пойти в отпуск?",
  "Кем можно стать, работая на складе?",
  "Как проходит обучение сотрудников склада?",
];
</script>

<template>
  <div
    class="max-w-[1920px] w-full flex justify-center items-center bg-[#F1F4F5] py-[80px]"
  >
    <div class="max-w-[1200px] w-full min-h-[570px] flex flex-col">
      <p class="text-[38px] font-bold">Часто задаваемые вопросы</p>
      <div class="w-full h-full flex flex-col">
        <AccorderonSection v-for="(item, index) in questions">
          <template #question>
            {{ item }}
          </template>
          <template #info>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </template>
        </AccorderonSection>
      </div>
    </div>
  </div>
</template>
