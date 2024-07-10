<template>
  <Card :style="{ width: 'min-content' }">
    <template #header>
      <img width="290" alt="user header" src="../../assets/img/product.jpg" />
    </template>
    <template #title>iPhone 11 pro max</template>
    <template #subtitle>
      Магазин: iStorePhone <br />
      Проверенный продавец ✅
    </template>
    <template #content>
      <p class="m-0">
        iPhone 11 Pro Max - это флагманский смартфон с 6,7-дюймовым
        OLED-экраном, 6 камерами, процессором Apple A13 Bionic, 4GB ОЗУ и 64GB
        внутренней памяти. Он поддерживает зарядку на 18Вт и имеет батарею с
        запасом до 12 часов работы.
      </p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <Button label="Купить" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
