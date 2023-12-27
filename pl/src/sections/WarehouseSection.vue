<script setup lang="ts">
import WarehouseCard from "@/components/WarehouseCard.vue";
import { ref } from "vue";
const data = ref([
  {
    img: "/src/assets/images/warehouse1.png",
    title: "Участок приёмки",
    data: [
      "Штрихкодирование товаров и внесение данных в информационную систему",
      "Штрихкодирование товаров и внесение данных в информационную систему",
      "Составление документов при выявлении пересортицы, излишков, недостачи",
    ],
  },
  {
    img: "/src/assets/images/warehouse2.png",
    title: "Участок размещения",
    data: [
      "Перемещение товара от мест группировки с участка приема",
      "Размещение товара с использованием ручного терминала",
      "Работа на мезонине",
    ],
  },
  {
    img: "/src/assets/images/warehouse3.png",
    title: "Участок отбора",
    data: [
      "Комплектация заказов с использованием ручного терминала",
      "Работа на мезонине",
      "Отбраковка товара при подборе",
    ],
  },
  {
    img: "/src/assets/images/warehouse4.png",
    title: "Участок контроля",
    data: [
      "Проверка корректности комплектации заказов",
      "Упаковка и тарификация отсортированного товара",
    ],
  },
]);
</script>

<template>
  <div
    class="max-w-[1920px] max-h-[880px] w-full h-screen flex justify-center items-center"
  >
    <div
      class="border border-red-500 max-w-[1200px] w-full max-h-[730px] h-full flex flex-col justify-between"
    >
      <div class="flex flex-col">
        <p class="text-[38px] font-bold">Зоны работы на складе</p>
        <p class="text-[24px]">
          Информацию об открытых позициях вам расскажет менеджер в процессе
          собеседования.
        </p>
      </div>
      <div class="border border-red-500 flex flex-wrap">
        <WarehouseCard
          v-for="(item, index) in data"
          :key="index"
          :data="item.img"
          class="w-[580px] h-[288px]"
        ></WarehouseCard>
      </div>
    </div>
  </div>
</template>
