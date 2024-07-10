<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  font-weight: bold;
  color: #424242;
  margin-bottom: 16px;
}
</style>
