<template>
  <Carousel wrapAround :autoplay="5000">
    <Slide v-for="slide in 3" :key="slide">
      <div class="carousel__item"></div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  <div class="container"></div>
</template>

<script setup lang="ts">
import "@/node_modules/vue3-carousel/dist/carousel.css";
import {
  Carousel,
  Navigation,
  Pagination,
  Slide,
} from "@/node_modules/vue3-carousel/dist/carousel.es";

const authStore = useAuthStore();

onMounted(() => authStore.authStateChange());
</script>

<style lang="scss" scoped>
.carousel__item {
  @apply w-full h-28;
  @apply bg-cover bg-no-repeat h-[400px];
  background-position: 0% 42%;
  background-image: url("https://srfimchuyzdzdqakerce.supabase.co/storage/v1/object/public/slides/slide-1.png");
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__pagination {
  .carousel__pagination-item {
  }
}
</style>
