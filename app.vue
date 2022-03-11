<script lang="ts" setup="">
  import { ref } from '@vue/reactivity';

  const count = ref(0);
  const clearCount = () => {
    count.value = 0;
  };
</script>


<template>
  <div class="flex justify-center items-center h-screen text-center">
    <div class="space-y-4">
      <h1 class="text-5xl">
        Hello World!
      </h1>
      <p v-if="count" class="cursor-pointer" @click="clearCount()">
        Times {{ count }}
        <span v-for="index in Math.floor(count / 10)" :key="index">!</span>
      </p>
      <button class="border-1 py-1 px-3 rounded-xl bg-gray-200 hover:bg-gray-300" @click="count++">
        increment
      </button>
    </div>
  </div>
</template>
