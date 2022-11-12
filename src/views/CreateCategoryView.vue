<template>
  <main>
    <section ref="section">
      <the-main-title :title="'Create Category'" :padding="'0vw'" />
      <the-svg-picker :title="'Category'" @contentToSave="openModal" />
    </section>
    <teleport to="body">
      <the-modal
        :isOpened="modalIsOpen"
        :titleMessage="'create category?'"
        @close="modalIsOpen = false"
        @accept="addCategory"
      />
    </teleport>
    <teleport to="body">
      <the-loading-modal :isOpened="loadIsOpen" />
    </teleport>
  </main>
</template>
<script>
import TheSvgPicker from "@/components/TheSvgPicker.vue";
import TheMainTitle from "@/components/TheMainTitle.vue";
import category from "@/mixins/mutations/category";
import categories from "@/mixins/queries/categories";
import TheModal from "@/components/TheModal.vue";
import TheLoadingModal from "@/components/TheLoadingModal.vue";

export default {
  components: { TheSvgPicker, TheMainTitle, TheModal, TheLoadingModal },
  mixins: [category, categories],
  data() {
    return {
      data: null,
      modalIsOpen: false,
      loadIsOpen: false,
    };
  },
  methods: {
    openModal(data) {
      this.data = data;
      this.modalIsOpen = true;
    },
    async addCategory() {
      this.loadIsOpen = true;
      this.modalIsOpen = false;
      let item = {
        category: this.data.name,
        svg: this.data.svg,
      };
      try {
        await this.createCategory(item);
        this.$apollo.queries.categories.refetch();
        this.loadIsOpen = false;
        this.$router.push({ name: "Home" });
        this.$emit("createdCategory");
      } catch {
        this.loadIsOpen = false;
        this.$emit("error");
      }
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
