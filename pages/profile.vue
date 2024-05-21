<template>
  <NuxtLayout>
    <div class="profile">
      <div v-if="!mobile" class="tabs">
        <div class="tabs-title font-semibold text-lg">Личный кабинет</div>

        <div
          v-for="{ key, icon, title } in profileNavigation"
          :key
          class="tab flex align-items-center"
        >
          <Icon :name="icon" size="23" class="mr-2" />
          <span class="font-semibold text-lg">{{ title }}</span>
        </div>
        <div class="tab exit flex align-items-center" @click="logout">
          <Icon
            name="ic:baseline-exit-to-app"
            size="25"
            color="#E52B50"
            class="mr-2"
          />
          <span class="font-semibold text-lg">Выйти из аккаунта</span>
        </div>
      </div>
      <div class="content">
        <div class="content-title font-semibold text-xl mb-5">
          Личные данные
        </div>
        <component :is="ProfileAddProduct" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ProfileUser from "@/components/profile/user.vue";
import ProfileAddProduct from "@/components/profile/addProduct.vue";

const authStore = useAuthStore();
const { mobile } = useDeviceBreakpoints();

definePageMeta({ middleware: ["auth", "profile"] });

const logout = () => {
  authStore.logout();
  navigateTo("/");
};
</script>

<style lang="scss" scoped>
.profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 10px;
}

.tabs,
.content {
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.1);
}

.tabs-title {
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
  padding-bottom: 10px;
}

.tab {
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
}

.tab.exit {
  color: #ed5a5a;
}
</style>
