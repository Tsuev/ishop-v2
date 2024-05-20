<template>
  <div class="user-profile">
    <div class="flex flex-column gap-2 w-6">
      <InputText v-model="email" disabled />
      <InputText v-model="phone" disabled />

      <Button label="Сохранить" class="w-6 mt-4" disabled />
    </div>
  </div>
</template>

<script setup lang="ts">
const authStore = useAuthStore();

const email = ref(authStore.user?.email);
const phone = ref(authStore.user?.user_metadata.phone);
</script>

<style lang="scss" scoped></style>
