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
          <div
            class="modal-title font-semibold text-center flex justify-center items-center mt-2"
          >
            Регистрация
          </div>
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="username" class="font-semibold">Почта</label>
          <InputText
            v-model="email"
            placeholder="Например: example@mail.ru"
            size="small"
          />
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="password" class="font-semibold">Пароль</label>
          <InputText
            v-model="password"
            placeholder="Придумайте пароль"
            type="password"
            size="small"
          />
        </div>
        <Button label="Зарегистрироваться" @click="registration" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Logo from "@/assets/img/logo.svg";

const model = defineModel();
const authStore = useAuthStore();

const emit = defineEmits<{
  (e: "modalClose"): void;
}>();

const email = ref("");
const password = ref("");

const registration = async () => {
  await authStore.registration(email.value, password.value);
  emit("modalClose");
};
</script>

<style lang="scss" scoped>
.modal-title {
  font-size: 22px;
}
</style>
