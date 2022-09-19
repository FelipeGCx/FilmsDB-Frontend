<template>
  <main>
    <the-main-title :title="'All Content'" />
    <div v-for="i in 20" :key="i">
      {{ i }}
    </div>
  </main>
</template>

<script>
import TheMainTitle from "@/components/TheMainTitle.vue";
export default {
  name: "AllView",
  components: { TheMainTitle },
};
</script>

<style scoped>
div {
  font-size: 6rem;
}
</style>
