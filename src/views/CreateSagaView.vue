<template>
  <main>
    <section ref="section">
      <the-main-title :title="'Create Saga'" :padding="'0vw'" />
      <the-svg-picker :title="'Saga'" @contentToSave="openModal" />
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
import saga from "@/mixins/mutations/saga";
import sagas from "@/mixins/queries/sagas";
import TheModal from "@/components/TheModal.vue";
export default {
  components: { TheSvgPicker, TheMainTitle, TheModal },
  mixins: [saga, sagas],
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
    async addSaga() {
      let item = {
        saga: this.data.name,
        svg: this.data.svg,
      };
      await this.createSaga(item);
      this.$apollo.queries.sagas.refetch();
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
