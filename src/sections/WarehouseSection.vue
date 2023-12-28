<script setup lang="ts">
import WarehouseCard from "@/components/WarehouseCard.vue";

//при билде почему-то картинки, прокинутые пропасми не попадают в билд
const img1 = new URL("@/assets/warehouse1.png", import.meta.url).pathname;
const img2 = new URL("@/assets/warehouse2.png", import.meta.url).pathname;
const img3 = new URL("@/assets/warehouse3.png", import.meta.url).pathname;
const img4 = new URL("@/assets/warehouse4.png", import.meta.url).pathname;

const data = [
  {
    img: img1,
    title: "Участок приёмки",
    data: [
      "Штрихкодирование товаров и внесение данных в информационную систему",
      "Штрихкодирование товаров и внесение данных в информационную систему",
      "Составление документов при выявлении пересортицы, излишков, недостачи",
    ],
  },
  {
    img: img2,
    title: "Участок размещения",
    data: [
      "Перемещение товара от мест группировки с участка приема",
      "Размещение товара с использованием ручного терминала",
      "Работа на мезонине",
    ],
  },
  {
    img: img3,
    title: "Участок отбора",
    data: [
      "Комплектация заказов с использованием ручного терминала",
      "Работа на мезонине",
      "Отбраковка товара при подборе",
    ],
  },
  {
    img: img4,
    title: "Участок контроля",
    data: [
      "Проверка корректности комплектации заказов",
      "Упаковка и тарификация отсортированного товара",
    ],
  },
];
</script>

<template>
  <div class="max-w-[1920px] py-[40px] w-full flex justify-center">
    <div class="max-w-[1200px] w-full flex flex-col gap-[20px] mx-[20px]">
      <div class="flex flex-col">
        <p class="text-[38px] font-bold">Зоны работы на складе</p>
        <p class="text-[24px]">
          Информацию об открытых позициях вам расскажет менеджер в процессе
          собеседования.
        </p>
      </div>
      <div
        class="h-full flex flex-wrap justify-between content-between gap-[30px]"
      >
        <WarehouseCard
          v-for="(item, index) in data"
          class="w-[48%] max-xl:w-full"
          :key="index"
          :imgPath="item.img"
          :title="item.title"
          :data="item.data"
        ></WarehouseCard>
      </div>
    </div>
  </div>
</template>
