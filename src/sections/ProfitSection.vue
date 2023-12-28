<script setup lang="ts">
import ProfitCard from "@/components/ProfitCard.vue";
//при билде почему-то картинки, прокинутые пропасми не попадают в билд
const img1 = new URL("@/assets/profit1.png", import.meta.url).pathname;
const img2 = new URL("@/assets/profit2.png", import.meta.url).pathname;
const img3 = new URL("@/assets/profit3.png", import.meta.url).pathname;
const img4 = new URL("@/assets/profit4.png", import.meta.url).pathname;
const img5 = new URL("@/assets/profit5.png", import.meta.url).pathname;
const img6 = new URL("@/assets/profit6.png", import.meta.url).pathname;
</script>

<template>
  <div class="max-w-[1920px] py-[80px] bg-[#E3E9ED]" id="profits">
    <div
      class="max-w-[1200px] w-full m-auto flex flex-col gap-[40px] max-xl:px-[20px]"
    >
      <p class="text-[38px] font-bold">
        Что вы получите работая в Профит-Лиге?
      </p>
      <div
        class="grid grid-cols-6 grid-rows-[192px_280px_144px] max-xl:flex max-xl:flex-col gap-5"
      >
        <div class="col-span-3">
          <ProfitCard
            pad="pr-[120px] max-xl:pr-[150px] max-sm:pr-[24px]"
            :imgPath="img1"
          >
            <template #heading>Конкурентная заработная плата</template>
            <template #paragraph
              >Мы оцениваем ваши усилия и навыки и стремимся предоставить вам
              зарплату, которая соответствует вашему вкладу в
              компанию.</template
            >
          </ProfitCard>
        </div>
        <div class="col-span-3 col-start-4">
          <ProfitCard
            pad="pr-[120px] max-xl:pr-[150px] max-sm:pr-[24px]"
            :imgPath="img2"
          >
            <template #heading>Комфортные условия труда</template>
            <template #paragraph
              >Мы стремимся создать здоровую и безопасную рабочую среду. У нас
              регулярно проводятся проверки и оценки условий труда с целью
              совершенствования нашего рабочего пространства.</template
            >
          </ProfitCard>
        </div>
        <div class="col-span-2 row-start-2">
          <ProfitCard
            pad="pr-[80px] max-xl:pr-[150px] max-sm:pr-[24px]"
            :imgPath="img3"
          >
            <template #heading>Интересные задачи</template>
            <template #paragraph
              >Ваша работа вносит реальный вклад в успех нашей компании. У вас
              будет возможность видеть непосредственное влияние своей работы и
              быть частью чего-то большого.</template
            >
          </ProfitCard>
        </div>
        <div class="col-span-2 col-start-3 row-start-2">
          <ProfitCard
            pad="pr-[80px] max-xl:pr-[150px] max-sm:pr-[24px]"
            :imgPath="img4"
          >
            <template #heading
              >Возможность работать в команде профессионалов</template
            >
            <template #paragraph
              >Работая с опытными коллегами, вы получите возможность развиваться
              как профессионал и расширять свои навыки и знания в
              специализированной сфере.</template
            >
          </ProfitCard>
        </div>
        <div class="col-span-2 col-start-5 row-start-2">
          <ProfitCard
            pad="pr-[80px] max-xl:pr-[150px] max-sm:pr-[24px]"
            :imgPath="img5"
          >
            <template #heading>Насыщенная корпоративная жизнь</template>
            <template #paragraph
              >Мы регулярно проводим различные мероприятия, такие как семинары,
              тренинги, тематические вечеринки, праздничные мероприятия и
              командные выезды.</template
            >
          </ProfitCard>
        </div>
        <div class="col-span-6 row-start-3">
          <ProfitCard
            pad="pr-[120px] max-xl:pr-[150px] max-sm:pr-[24px]"
            :imgPath="img6"
          >
            <template #heading
              >Корпоративная скидка на все продаваемые бренды</template
            >
            <template #paragraph
              >Мы предоставляем персональные скидки для наших сотрудников,
              которые позволяют вам пользоваться нашими товарами и услугами на
              более выгодных условиях.</template
            >
          </ProfitCard>
        </div>
      </div>
    </div>
  </div>
</template>
