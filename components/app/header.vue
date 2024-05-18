<template>
  <header class="bg-primary">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
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
          <Icon v-if="true" name="ic:baseline-person" size="25" color="white" />
        </NuxtLink>
        <div v-else class="auth-btns">
          <Button
            label="Вход"
            outlined
            class="text-white mr-1 px-[15px] py-1"
            @click="openLogin = true"
          />
          <Button
            outlined
            label="Регистрация"
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
</script>

<style lang="scss" scoped>
header {
  color: white;
  .container {
    padding: 0 20px;
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
      list-style-type: none;
      a {
        color: white;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
      }
    }
  }

  .lk {
    cursor: pointer;
  }
}
</style>
