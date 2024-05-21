<template>
  <Sidebar v-model:visible="model">
    <template #container="{ closeCallback }">
      <div class="flex flex-column h-full">
        <div
          class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0"
        >
          <span class="inline-flex align-items-center gap-2">
            <span class="font-semibold text-lg text-primary"
              >Войдите в свой аккаунт</span
            >
          </span>
          <Button
            type="button"
            @click="closeCallback"
            icon="pi pi-times"
            rounded
            outlined
            class="h-2rem w-2rem"
          />
        </div>
        <AppNavigationNav />
      </div>
    </template>
  </Sidebar>
</template>

<script setup>
const model = defineModel({ default: false });
</script>
