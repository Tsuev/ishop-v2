<template>
  <Dialog
    v-model:visible="model"
    modal
    header="Добавить смартфон"
    :style="{ width: '25rem' }"
  >
    <div class="flex flex-column gap-2 mb-3">
      <label>Наименование</label>
      <InputText
        v-model="smartphoneQueries.name"
        placeholder="Например: iPhone"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Серия</label>
      <InputText
        v-model="smartphoneQueries.series"
        placeholder="Например: 15, 14, 13"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Модель</label>
      <InputText
        v-model="smartphoneQueries.model"
        placeholder="Например: pro, pro max"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Цвет</label>
      <InputText
        v-model="smartphoneQueries.color"
        placeholder="Например: черный, белый"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>АКБ</label>
      <InputNumber
        v-model="smartphoneQueries.battery"
        :min="0"
        :max="100"
        placeholder="Например: 70, 80"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Память</label>
      <InputText
        v-model="smartphoneQueries.memory"
        placeholder="Например: 64, 128, 256"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Описание</label>
      <Textarea
        rows="5"
        cols="30"
        v-model="smartphoneQueries.description"
        placeholder="Например: Очень хороший смартфон"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Фотографии</label>
      <InputNumber
        v-model="smartphoneQueries.battery"
        :min="0"
        :max="100"
        placeholder="Например: 70, 80"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label>Новый</label>
      <InputSwitch v-model="smartphoneQueries.new" />
    </div>
    <div class="flex gap-2">
      <Button
        type="button"
        label="Добавить"
        class="w-full"
        :disabled="!isFilledForm"
        @click="createProduct"
        :loading="loading"
      />
    </div>
  </Dialog>
</template>

<script setup lang="ts">
const model = defineModel({ default: false });
const productsStore = useProductsStore();
const authStore = useAuthStore();

const emit = defineEmits<{
  (e: "modalClose"): void;
}>();

const smartphoneQueries = reactive({
  name: "iPhone",
  series: "",
  model: "",
  color: "",
  battery: 100,
  memory: 64,
  description: "",
  new: false,
});

const loading = ref(false);

const isFilledForm = computed<boolean>(() => {
  return (
    smartphoneQueries.name !== "" &&
    smartphoneQueries.series !== "" &&
    smartphoneQueries.color !== "" &&
    smartphoneQueries.battery !== 0 &&
    smartphoneQueries.memory !== 0 &&
    smartphoneQueries.description !== ""
  );
});

const closeModal = () => {
  emit("modalClose");
};

const createProduct = async () => {
  try {
    loading.value = true;
    productsStore.createProduct({
      user_id: authStore.user?.id as string,
      name: smartphoneQueries.name,
      series: smartphoneQueries.series,
      model: smartphoneQueries.model,
      color: smartphoneQueries.color,
      description: smartphoneQueries.description,
      battery: smartphoneQueries.battery,
      memory: smartphoneQueries.memory,
      new: smartphoneQueries.new,
    });
    productsStore.getUserProducts();
    emit("modalClose");
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
    model.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
