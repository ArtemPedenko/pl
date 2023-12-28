<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
  <div
    class="max-w-[1920px] max-h-[700px] w-full h-screen flex justify-center items-center"
    id="reqistration"
  >
    <div
      class="z-20 flex max-w-[1200px] max-h-[540px] w-full h-screen bg-[#E3E9ED] rounded-[25px] overflow-hidden"
    >
      <div
        class="flex flex-col gap-3 w-1/2 max-lg:w-full max-lg:justify-center max-lg:items-center max-lg:text-center py-[60px] pl-[60px] pr-[80px]"
      >
        <p class="text-[38px] font-bold max-xl:text-[30px]">
          Не упустите шанс подняться по карьерной лестнице!
        </p>
        <div class="w-full border border-[#0EBC05]"></div>
        <p class="text-[20px] max-xl:text-[18px]">
          Зарегистрируйтесь и позвольте нашим менеджерам предложить вам самые
          подходящие вакансии.
        </p>
        <div
          class="max-w-[280px] w-full h-[60px] mt-[50px] max-lg:mt-[10px] text-[18px] text-white"
        >
          <Button href="/registration">Пройти регистрацию</Button>
        </div>
      </div>
      <img
        alt="register girl"
        src="@/assets/register-girl.png"
        class="h-full w-1/2 object-cover max-lg:hidden"
      />
    </div>
  </div>
</template>
