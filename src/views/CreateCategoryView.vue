<template>
  <main>
    <section ref="section">
      <the-main-title :title="'Create Category'" :padding="'0vw'" />
      <the-svg-picker :title="'Category'" @contentToSave="addCategory" />
    </section>
  </main>
</template>
<script>
import TheSvgPicker from "@/components/TheSvgPicker.vue";
import TheMainTitle from "@/components/TheMainTitle.vue";
import category from "@/mixins/mutations/category";
import categories from "@/mixins/queries/categories";
export default {
  components: { TheSvgPicker, TheMainTitle },
  mixins: [category, categories],
  methods: {
    addCategory(data) {
      let item = {
        category: data.name,
        svg: data.svg,
      };
      this.category(item);
      this.$apollo.queries.categories.refetch();
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 6rem 0 6rem;
}
</style>
