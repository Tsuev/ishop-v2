<template>
  <NuxtLayout>
    <div class="profile">
      <div v-if="!mobile" class="col-3">
        <div class="tabs">
          <div class="tabs-title font-semibold text-lg">Личный кабинет</div>

          <div
            v-for="{ key, icon, title } in profileNavigation"
            :key
            :class="[
              'tab flex align-items-center',
              { active: key === currentComponent },
            ]"
            @click="currentComponent = key"
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
      </div>
      <div :class="[mobile ? 'col-12' : 'col-9']">
        <div class="content">
          <div class="content-title font-semibold text-xl mb-5">
            {{ currentTitle }}
          </div>
          <ProfileUser
            v-if="currentComponent === ProfileNavigationEnum.Profile"
          />
          <ProfileProduct
            v-if="currentComponent === ProfileNavigationEnum.Product"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ProfileNavigationEnum } from "~/enums/profile";

type currentComponentType =
  | ProfileNavigationEnum.Profile
  | ProfileNavigationEnum.Product;

const authStore = useAuthStore();
const { mobile } = useDeviceBreakpoints();

definePageMeta({ middleware: ["auth", "profile"] });

const currentComponent = ref<currentComponentType>(
  ProfileNavigationEnum.Profile
);

const currentTitle = computed(() => {
  switch (currentComponent.value) {
    case ProfileNavigationEnum.Profile:
      return "Личный кабинет";
    case ProfileNavigationEnum.Product:
      return "Мои продукты";
  }
});

const logout = () => {
  authStore.logout();
  navigateTo("/");
};
</script>

<style lang="scss" scoped>
@import "primeflex/primeflex.scss";

.profile {
  @include styleclass("grid");
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

.tab.active {
  color: var(--primary-color);
}

.tab.exit {
  color: #ed5a5a;
}
</style>
