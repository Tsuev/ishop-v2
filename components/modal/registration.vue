<template>
  <Dialog
    v-model:visible="model"
    modal
    closable
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
            class="modal-title font-semibold text-center flex justify-center items-center mt-2 text-white"
          >
            Регистрация
          </div>
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="username" class="font-semibold text-white">Почта</label>
          <InputText class="bg-white-alpha-20" v-model="email" size="small" />
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="username" class="font-semibold text-white"
            >Номер телефона</label
          >
          <InputMask id="basic" v-model="phone" mask="+79999999999" />
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="password" class="font-semibold text-white">Пароль</label>
          <InputText v-model="password" type="password" size="small" />
        </div>
        <Button label="Зарегистрироваться" @click="registration" />
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
const phone = ref("");

const registration = async () => {
  await authStore.registration(email.value, password.value, phone.value);
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
