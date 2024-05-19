<template>
  <Dialog
    v-model:visible="model"
    modal
    :pt="{
      root: 'border-none',
      mask: {
        style: 'backdrop-filter: blur(5px)',
      },
    }"
  >
    <template #container="{ closeCallback }">
      <div
        class="flex flex-column px-5 py-5 gap-4"
        style="
          border-radius: 12px;
          background-image: radial-gradient(
            circle at left top,
            var(--primary-400),
            var(--primary-700)
          );
        "
      >
        <Logo class="mx-auto" />
        <div class="inline-flex flex-column gap-2">
          <label for="username" class="text-primary-50 font-semibold"
            >Почта</label
          >
          <InputText
            v-model="email"
            id="username"
            class="bg-white-alpha-20 border-none p-3 text-primary-50 w-20rem"
          ></InputText>
        </div>
        <div class="inline-flex flex-column gap-2">
          <label for="password" class="text-primary-50 font-semibold"
            >Пароль</label
          >
          <InputText
            v-model="password"
            id="password"
            class="bg-white-alpha-20 border-none p-3 text-primary-50 w-20rem"
            type="password"
          ></InputText>
        </div>
        <div class="flex align-items-center gap-3">
          <Button
            label="Назад"
            @click="closeCallback"
            text
            class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
          ></Button>
          <Button
            label="Войти"
            @click="registration"
            text
            class="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
          ></Button>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Logo from "@/assets/img/logo.svg";

const model = defineModel({ default: false });
const authStore = useAuthStore();

const emit = defineEmits<{
  (e: "modalClose"): void;
}>();

const email = ref("");
const password = ref("");

const registration = async () => {
  await authStore.login(email.value, password.value);
  emit("modalClose");
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
