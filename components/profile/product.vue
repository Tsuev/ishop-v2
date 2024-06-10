<template>
  <div v-if="productsStore.userProducts" class="card">
    <DataTable scrollable :value="productsStore.userProducts">
      <Column field="name" header="Наименование"></Column>
      <Column field="series" header="Серия"></Column>
      <Column field="model" header="Модель"></Column>
      <Column field="battery" header="АКБ"></Column>
      <Column field="memory" header="Память"></Column>
      <Column field="color" header="Цвет"></Column>
      <Column field="new" header="Новый"></Column>
    </DataTable>
  </div>
  <Card v-else>
    <template #title>
      <h2>Нет добавленных товаров</h2>
    </template>
  </Card>
  <Button
    label="Добавить смартфон"
    class="px-2 py-2 mt-3"
    @click="openAddProductModal = true"
  />

  <ModalAddProduct
    v-model:visible="openAddProductModal"
    @modal-close="openAddProductModal = false"
  />
</template>

<script setup lang="ts">
const productsStore = useProductsStore();

const openAddProductModal = ref(false);
</script>
