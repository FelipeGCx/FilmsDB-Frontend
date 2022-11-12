<template>
  <main>
    <section ref="section">
      <the-main-title :title="'Create Saga'" :padding="'0vw'" />
      <the-svg-picker :title="'Saga'" @contentToSave="openModal" />
    </section>
    <teleport to="body">
      <the-modal
        :isOpened="modalIsOpen"
        :titleMessage="'create saga?'"
        @close="modalIsOpen = false"
        @accept="addSaga"
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
import saga from "@/mixins/mutations/saga";
import sagas from "@/mixins/queries/sagas";
import TheModal from "@/components/TheModal.vue";
import TheLoadingModal from "@/components/TheLoadingModal.vue";

export default {
  components: { TheSvgPicker, TheMainTitle, TheModal, TheLoadingModal },
  mixins: [saga, sagas],
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
    async addSaga() {
      this.loadIsOpen = true;
      this.modalIsOpen = false;
      let item = {
        saga: this.data.name,
        svg: this.data.svg,
      };
      try {
        await this.createSaga(item);
        this.$apollo.queries.sagas.refetch();
        this.loadIsOpen = false;
        this.$router.push({ name: "Home" });
        this.$emit("createdSaga");
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
