<script setup lang="ts">
import ProfitCard from "@/components/ProfitCard.vue";
</script>

<template>
  <div class="max-w-[1920px] py-[80px]">
    <div class="max-w-[1200px] w-full m-auto">
      <p class="text-[38px] font-bold">
        Что вы получите работая в Профит-Лиге?
      </p>
      <div class="border border-red-600 grid grid-cols-6 grid-rows-3 gap-5">
        <div class="border border-red-600 col-span-3">
          <ProfitCard pad="">
            <template #heading>Конкурентная заработная плата</template>
            <template #paragraph
              >Мы оцениваем ваши усилия и навыки и стремимся предоставить вам
              зарплату, которая соответствует вашему вкладу в
              компанию.</template
            >
            <template #icon>icon</template>
          </ProfitCard>
        </div>
        <div class="border border-red-600 col-span-3 col-start-4">
          <ProfitCard pad="">
            <template #heading>Комфортные условия труда</template>
            <template #paragraph
              >Мы стремимся создать здоровую и безопасную рабочую среду. У нас
              регулярно проводятся проверки и оценки условий труда с целью
              совершенствования нашего рабочего пространства.</template
            >
            <template #icon>icon</template>
          </ProfitCard>
        </div>
        <div class="border border-red-600 col-span-2 row-start-2">
          <ProfitCard>
            <template #heading>Интересные задачи</template>
            <template #paragraph
              >Ваша работа вносит реальный вклад в успех нашей компании. У вас
              будет возможность видеть непосредственное влияние своей работы и
              быть частью чего-то большого.</template
            >
            <template #icon>icon</template>
          </ProfitCard>
        </div>
        <div class="border border-red-600 col-span-2 col-start-3 row-start-2">
          <ProfitCard>
            <template #heading
              >Возможность работать в команде профессионалов</template
            >
            <template #paragraph
              >Работая с опытными коллегами, вы получите возможность развиваться
              как профессионал и расширять свои навыки и знания в
              специализированной сфере.</template
            >
            <template #icon>icon</template>
          </ProfitCard>
        </div>
        <div class="border border-red-600 col-span-2 col-start-5 row-start-2">
          <ProfitCard>
            <template #heading>Насыщенная корпоративная жизнь</template>
            <template #paragraph
              >Мы регулярно проводим различные мероприятия, такие как семинары,
              тренинги, тематические вечеринки, праздничные мероприятия и
              командные выезды.</template
            >
            <template #icon>icon</template>
          </ProfitCard>
        </div>
        <div class="border border-red-600 col-span-6 row-start-3">
          <ProfitCard pad="">
            <template #heading
              >Корпоративная скидка на все продаваемые бренды</template
            >
            <template #paragraph
              >Мы предоставляем персональные скидки для наших сотрудников,
              которые позволяют вам пользоваться нашими товарами и услугами на
              более выгодных условиях.</template
            >
            <template #icon>icon</template>
          </ProfitCard>
        </div>
      </div>
    </div>
  </div>
</template>
