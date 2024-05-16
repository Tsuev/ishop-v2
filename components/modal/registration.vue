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
    <template #container="{ closeCallback }">
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
            class="font-semibold text-center flex justify-center items-center mt-1 text-4xl"
          >
            Регистрация
          </div>
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="username" class="font-semibold">Почта</label>
          <InputText placeholder="Например: example@mail.ru" />
        </div>
        <div class="inline-flex flex-col gap-2">
          <label for="password" class="font-semibold">Пароль</label>
          <InputText placeholder="Придумайте пароль" type="password" />
        </div>
        <Button label="Регистрация" @click="closeCallback" />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Logo from "@/assets/img/logo.svg";

const model = defineModel();
</script>

<style lang="scss" scoped></style>
