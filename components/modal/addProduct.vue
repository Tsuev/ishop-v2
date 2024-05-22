<template>
  <Dialog
    v-model:visible="model"
    modal
    :closable="false"
    header="Добавить смартфон"
    :style="{ width: '25rem' }"
  >
    <div class="flex flex-column gap-2 mb-3">
      <label>Наименование</label>
      <InputText />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Серия</label>
      <InputText />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Цвет</label>
      <InputText />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>АКБ</label>
      <InputText />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Память</label>
      <InputText />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Описание</label>
      <Textarea rows="5" cols="30" />
    </div>
    <div class="flex justify-content-end gap-2">
      <Button
        type="button"
        label="Назад"
        severity="secondary"
        @click="model = false"
      ></Button>
      <Button type="button" label="Добавить" @click="model = false"></Button>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
const model = defineModel({ default: false });
</script>

<style lang="scss" scoped></style>
