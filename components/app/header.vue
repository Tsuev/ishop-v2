<template>
  <header class="bg-primary">
    <div class="container">
      <Button v-if="mobile" @click="openSidebar = true" class="p-0">
        <Icon name="ic:round-menu" size="25" color="white" />
      </Button>
      <Logo class="logo" @click="$router.push('/')" />
      <AppNavigationDesktop v-if="!mobile" />
      <div class="profile">
        <Icon
          v-if="user"
          @click="$router.push('/profile')"
          name="ic:baseline-person"
          size="25"
          color="white"
        />
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
  <AppSidebar v-model:visible="openSidebar" />
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import Logo from "@/assets/img/logo.svg";

const { user } = storeToRefs(useAuthStore());

const openLogin = ref(false);
const openRegistration = ref(false);
const openSidebar = ref(false);

const { mobile } = useDeviceBreakpoints();
</script>

<style lang="scss" scoped>
header {
  color: white;
  .container {
    padding: 5px 20px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    cursor: pointer;
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
        padding: 2px 9px;
        border-radius: 5px;
      }
    }
  }

  .profile {
    cursor: pointer;
  }
}
</style>
