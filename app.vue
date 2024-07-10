<template>
  <AppHeader />
  <NuxtPage />
  <Toast position="bottom-right" />
</template>

<script setup lang="ts">
definePageMeta({ middleware: ["auth"] });
</script>

<style lang="scss"></style>
