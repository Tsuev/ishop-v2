<template>
  <NuxtLayout>
    <div class="profile">
      <div class="tabs">
        <div class="tabs-title font-semibold text-lg">Личный кабинет</div>

        <div
          v-for="tab in menu"
          :key="tab.id"
          class="tab flex align-items-center"
        >
          <Icon :name="tab.icon" size="23" class="mr-2" />
          <span class="font-semibold text-lg">{{ tab.title }}</span>
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
        <component :is="" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const menu = ref([
  {
    id: 1,
    title: "Профиль",
    icon: "ic:baseline-person",
  },
  {
    id: 2,
    title: "Добавить товар",
    icon: "ic:twotone-smartphone",
  },
  {
    id: 3,
    title: "Опубликовать заказ",
    icon: "ic:twotone-smartphone",
  },
  {
    id: 4,
    title: "Список заказов",
    icon: "ic:baseline-format-list-numbered",
  },
]);

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
