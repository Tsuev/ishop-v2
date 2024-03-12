<template>
  <div class="flex justify-center pt-10 flex-col max-w-[1200px] mx-auto">
    <h1 class="text-2xl mb-7">Привет это IShop V2</h1>
    <InputText class="mb-2" type="email" v-model="email" />
    <InputText class="mb-2" type="password" v-model="password" />
    <Button label="Войти" @click="registration" />
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");

const registration = async () => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
