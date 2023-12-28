<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
  <div class="max-w-[1920px] w-full py-[80px] flex justify-center items-center">
    <div class="max-w-[1200px] w-full flex flex-col gap-[40px] mx-[20px]">
      <p class="text-[38px] font-bold">Свяжитесь с нашими HR-специалистами</p>
      <div class="flex justify-between gap-[32px] items-between h-full">
        <div class="flex flex-col justify-between w-1/2 max-slg:w-full">
          <p class="w-full text-[24px]">
            Свяжитесь с нашими HR-специалистами и получите квалифицированную
            помощь в области управления персоналом. Наша команда экспертов по
            кадровым вопросам готова оказать вам поддержку и решить любые
            вопросы, связанные с наймом, увольнением, обучением и развитием
            сотрудников.
          </p>
          <div
            class="w-[300px] h-[60px] text-white text-[18px] mt-[50px] max-slg:mx-auto"
          >
            <Button href="/registration">Пройти регистрацию</Button>
          </div>
        </div>
        <img
          alt="contact"
          src="@/assets/contact.png"
          class="w-1/2 h-[376px] object-cover rounded-[24px] max-slg:hidden"
        />
      </div>
    </div>
  </div>
</template>
