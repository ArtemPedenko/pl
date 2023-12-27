<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
  <div
    class="max-w-[1920px] max-h-[650px] w-full h-screen flex justify-center items-center"
  >
    <div class="max-w-[1200px] w-full h-[480px] flex flex-col gap-[40px]">
      <p class="text-[38px] font-bold">Свяжитесь с нашими HR-специалистами</p>
      <div class="flex justify-between gap-[32px]">
        <div class="flex flex-col justify-between">
          <p class="w-[523px] text-[24px]">
            Свяжитесь с нашими HR-специалистами и получите квалифицированную
            помощь в области управления персоналом. Наша команда экспертов по
            кадровым вопросам готова оказать вам поддержку и решить любые
            вопросы, связанные с наймом, увольнением, обучением и развитием
            сотрудников.
          </p>
          <div class="w-[280px] h-[60px] text-white text-[13px]">
            <Button>Пройти регистрацию</Button>
          </div>
        </div>
        <img
          alt="contact"
          src="@/assets/contact.png"
          class="w-[584px] h-[376px] object-cover rounded-[24px]"
        />
      </div>
    </div>
  </div>
</template>
