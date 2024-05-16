<template>
  <header>
    <div class="container">
      <div class="logo">
        <Logo />
      </div>
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
      <div class="lk">
        <!-- <Icon name="ic:baseline-person" size="25" /> -->
        <Button label="Регистрация" icon="pi pi-user" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/assets/img/logo.svg";
</script>

<style lang="scss" scoped>
header {
  background-color: var(--primary-color);
  color: white;
  .container {
    @apply py-[7px];
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    ul {
      display: flex;
      gap: 30px;
      flex: 1;
    }
  }

  .lk {
    cursor: pointer;
  }
}
</style>
