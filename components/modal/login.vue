<template>
  <Dialog
    v-model:visible="model"
    modal
    :style="{ width: '25rem' }"
    :pt="{
      root: 'border-none',
      mask: {
        style: 'backdrop-filter: blur(5px)',
      },
    }"
  >
    <template #container>
      <div
        class="flex flex-col px-5 py-5 gap-4"
        style="
          border-radius: 12px;
          background-image: radial-gradient(
            circle at left top,
            var(--primary-400),
            var(--primary-700)
          );
        "
      >
        <div class="title">
          <Logo class="mx-auto" />
          <div class="font-semibold text-center mt-1 modal-title">Вход</div>
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="username" class="font-semibold">Почта</label>
          <InputText placeholder="Например: example@mail.ru" />
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="password" class="font-semibold">Пароль</label>
          <InputText placeholder="Придумайте пароль" type="password" />
        </div>
        <Button label="Войти" @click="login" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Logo from "@/assets/img/logo.svg";

const model = defineModel({ default: false });

const authStore = useAuthStore();
const email = ref("");
const password = ref("");

const login = async () => {
  await authStore.login(email.value, password.value);
  model.value = false;
};
</script>

<style lang="scss" scoped>
.modal-title {
  font-size: 22px;
}

:deep(.p-inputtext) {
  background-color: rgba($color: #ffffff, $alpha: 0.1);
  border: none;
  @apply text-white;
  font-weight: bolder;
  &::placeholder {
    color: rgb(230, 230, 230);
  }
}
</style>
