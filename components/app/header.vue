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
        <NuxtLink v-if="user" :to="`/lk/${user.id}`">
          <Icon v-if="true" name="ic:baseline-person" size="25" />
        </NuxtLink>
        <div v-else class="auth-btns">
          <Button
            label="Вход"
            outlined
            class="text-white mr-1 px-[15px] py-1"
            @click="openLogin = true"
          />
          <Button
            label="Регистрация"
            outlined
            class="text-white px-[15px] py-1"
            @click="openRegistration = true"
          />
        </div>
      </div>
    </div>
  </header>
  <ModalLogin v-model:visible="openLogin" @modalClose="openLogin = false" />
  <ModalRegistration
    v-model:visible="openRegistration"
    @modalClose="openRegistration = false"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import Logo from "@/assets/img/logo.svg";

const { user } = storeToRefs(useAuthStore());

const openLogin = ref(false);
const openRegistration = ref(false);
const registrationModal = ref(null);

onClickOutside(
  registrationModal,
  () => ([openRegistration.value, openLogin.value] = [false, false])
);
console.log(user);
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
    font-weight: bold;
    ul {
      display: flex;
      justify-content: center;
      gap: 30px;
    }
  }

  .lk {
    cursor: pointer;
  }
}
</style>
