<template>
  <main>
    <section ref="section">
      <the-main-title :title="'Create Category'" :padding="'0vw'" />
      <the-svg-picker :title="'Category'" @contentToSave="openModal" />
    </section>
    <teleport to="body">
      <the-modal
        :isOpened="isOpen"
        :titleMessage="'create saga?'"
        @close="isOpen = false"
        @accept="addSaga"
      />
    </teleport>
  </main>
</template>
<script>
import TheSvgPicker from "@/components/TheSvgPicker.vue";
import TheMainTitle from "@/components/TheMainTitle.vue";
import category from "@/mixins/mutations/category";
import categories from "@/mixins/queries/categories";
import TheModal from "@/components/TheModal.vue";
export default {
  components: { TheSvgPicker, TheMainTitle, TheModal },
  mixins: [category, categories],
  data() {
    return {
      data: null,
      isOpen: false,
    };
  },
  methods: {
    openModal(data) {
      this.data = data;
      this.isOpen = true;
    },
    async addCategory() {
      let item = {
        category: this.data.name,
        svg: this.data.svg,
      };
      await this.createCategory(item);
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
