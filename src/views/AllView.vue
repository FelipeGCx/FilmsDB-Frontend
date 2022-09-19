<template>
  <main>
    <the-main-title :title="'All Content'" />
    <the-filters />
    <div v-for="i in 20" :key="i">
      {{ i }}
    </div>
  </main>
</template>

<script>
import TheMainTitle from "@/components/TheMainTitle.vue";
import TheFilters from "@/components/TheFilters.vue";
export default {
  name: "AllView",
  components: { TheMainTitle, TheFilters },
};
</script>

<style scoped>
div {
  font-size: 6rem;
}
</style>
