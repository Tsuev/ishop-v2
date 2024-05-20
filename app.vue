<template>
  <AppHeader />
  <NuxtPage />
  <Toast position="bottom-right" />
</template>

<script setup lang="ts">
useHead({
  title: "iShop - Смартфоны",
});

definePageMeta({ middleware: ["auth"] });

// const { mobile } = useDeviceBreakpoints();
</script>

<style lang="scss"></style>
