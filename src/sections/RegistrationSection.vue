<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
  <div
    class="max-w-[1920px] max-h-[700px] w-full h-screen flex justify-center items-center"
  >
    <div
      class="z-20 flex max-w-[1200px] max-h-[540px] w-full h-screen bg-[#E3E9ED] rounded-[25px] overflow-hidden"
    >
      <div class="flex flex-col gap-3 w-1/2 py-[60px] pl-[60px] pr-[80px]">
        <p class="text-[38px] font-bold">
          Не упустите шанс подняться по карьерной лестнице!
        </p>
        <div class="w-full border border-[#0EBC05]"></div>
        <p class="text-[20px]">
          Зарегистрируйтесь и позвольте нашим менеджерам предложить вам самые
          подходящие вакансии.
        </p>
        <div class="w-[280px] h-[60px] text-[12px] text-white mt-[50px]">
          <Button>Пройти регистрацию</Button>
        </div>
      </div>
      <img
        alt="register girl"
        src="@/assets/images/register-girl.png"
        class="h-full w-1/2 object-cover"
      />
    </div>
  </div>
</template>
