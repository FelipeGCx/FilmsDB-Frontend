<template>
  <main>
    <div v-for="i in 20" :key="i">
      {{ i }}
    </div>
    <the-pagination/>
    </main>
</template>

<script>
import ThePagination from '@/components/ThePagination.vue';
export default {
  name: "AllView",
  components:{ThePagination}
};
</script>

<style scoped>
div {
  font-size: 6rem;
}
</style>
