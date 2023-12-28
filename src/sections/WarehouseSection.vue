<script setup lang="ts">
import WarehouseCard from "@/components/WarehouseCard.vue";
const data = [
  {
    img: "/src/assets/warehouse1.png",
    title: "Участок приёмки",
    data: [
      "Штрихкодирование товаров и внесение данных в информационную систему",
      "Штрихкодирование товаров и внесение данных в информационную систему",
      "Составление документов при выявлении пересортицы, излишков, недостачи",
    ],
  },
  {
    img: "/src/assets/warehouse2.png",
    title: "Участок размещения",
    data: [
      "Перемещение товара от мест группировки с участка приема",
      "Размещение товара с использованием ручного терминала",
      "Работа на мезонине",
    ],
  },
  {
    img: "/src/assets/warehouse3.png",
    title: "Участок отбора",
    data: [
      "Комплектация заказов с использованием ручного терминала",
      "Работа на мезонине",
      "Отбраковка товара при подборе",
    ],
  },
  {
    img: "/src/assets/warehouse4.png",
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
