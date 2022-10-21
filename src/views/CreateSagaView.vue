<template>
  <main>
    <section ref="section">
      <the-main-title :title="'Create Saga'" :padding="'0vw'" />
      <the-svg-picker :title="'Saga'" @contentToSave="addSaga" />
    </section>
  </main>
</template>
<script>
import TheSvgPicker from "@/components/TheSvgPicker.vue";
import TheMainTitle from "@/components/TheMainTitle.vue";
import saga from "@/mixins/mutations/saga";
import sagas from "@/mixins/queries/sagas";
export default {
  components: { TheSvgPicker, TheMainTitle },
  mixins: [saga, sagas],
  methods: {
    async addSaga(data) {
      console.log(data);
      let item = {
        saga: data.name,
        svg: data.svg,
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
