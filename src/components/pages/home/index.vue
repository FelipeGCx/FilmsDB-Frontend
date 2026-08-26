<template>
  <View v-if="isClient" />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import View from "./_view/index.vue";

const isClient = ref<boolean>(false);

onMounted(() => {
  isClient.value = true;
});
</script>
