<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
  <div
    class="bg-[url('/src/assets/greeting.png')] bg-cover bg-gray bg-opacity-50 bg-center max-w-[1920px] h-[640px] text-white flex justify-center"
  >
    <div
      class="border border-red-500 max-w-[1200px] w-full pt-[130px] flex flex-col gap-[32px] max-xl:mx-[20px] max-md:gap-[50px]"
    >
      <h1
        class="text-[56px] max-w-[700px] font-bold max-lg:text-[40px] max-sm:text-[30px]"
      >
        Вы приглашены на онлайн-собеседование.
      </h1>
      <p class="max-w-[400px] text-[24px] max-lg:text-[18px]">
        Просим Вас пройти регистрацию. До встречи!
      </p>
      <div
        class="h-[80px] w-[415px] flex text-[24px] relative max-lg:text-[18px] max-lg:w-[300px]"
      >
        <Button href="/registration">Пройти регистрацию</Button>
        <img
          alt="arrow"
          class="absolute -left-[65px] -bottom-[10px] w-[45px] h-[101px]"
          src="@/assets/arrow.svg"
          width="180"
          height="37"
        />
      </div>
    </div>
  </div>
</template>
