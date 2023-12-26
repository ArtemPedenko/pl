<script setup lang="ts"></script>

<template>
  <div
    class="bg-[url('/src/assets/images/greeting.png')] bg-cover bg-gray bg-opacity-50 bg-center max-w-[1920px] h-[640px] text-white"
  >
    <div
      class="border border-red-600 max-w-[1200px] w-full m-auto pt-[130px] flex flex-col gap-[32px]"
    >
      <h1 class="text-[56px] max-w-[700px] font-bold">
        Вы приглашены на онлайн-собеседование.
      </h1>
      <p class="max-w-[400px] text-[24px]">
        Просим Вас пройти регистрацию. До встречи!
      </p>
      <div
        class="border border-red-600 h-[80px] w-[415px] flex text-[24px] relative"
      >
        <Button>Пройти регистрацию</Button>
        <img
          alt="Vue logo"
          class="absolute -left-[65px] -bottom-[10px] w-[45px] h-[101px]"
          src="@/assets/arrow.svg"
          width="180"
          height="37"
        />
      </div>
    </div>
  </div>
</template>
