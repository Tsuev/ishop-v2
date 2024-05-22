<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/catalog">Каталог</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/orders">Смартфон под заказ</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/repair">Ремонтные сервисы</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/used-smartphones">Б/У смартфоны</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
nav {
  font-weight: bold;
  ul {
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style-type: none;
    a {
      color: white;
      text-decoration: none;
      padding: 2px 9px;
      border-radius: 5px;
    }
  }
}
</style>
