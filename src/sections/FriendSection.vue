<script setup lang="ts"></script>

<template>
  <div
    class="max-w-[1920px] max-h-[1080px] w-full h-screen relative text-white flex justify-center items-center"
  >
    <div
      class="absolute -z-10 w-full h-full bg-[url('@/assets/friend.png')] bg-cover filter brightness-[40%] bg-center"
    ></div>
    <div
      class="z-20 flex flex-col max-w-[640px] gap-[36px] text-center max-xl:mx-[20px]"
    >
      <p class="text-[67px] font-bold max-md:text-[50px]">ПРИВЕДИ ДРУГА!</p>
      <p class="text-[24px] font-normal max-md:text-[18px]">
        Мы будем рады, если ты будешь рекомендовать работу в нашей компании
        своим друзьям/коллегам/родственникам. Если твоего друга или знакомого
        берут к нам на склад, и он успешно проходит испытательный срок, то ты
        получаешь премию за хорошую рекомендацию
      </p>
    </div>
  </div>
</template>
