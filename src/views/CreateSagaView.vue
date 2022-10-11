<template>
  <main>
    <section ref="section">
      <the-main-title
        :title="'Create Saga'"
        @contentSave="addSaga"
        :padding="'0vw'"
      />
      <the-svg-picker :title="'Saga'" />
    </section>
  </main>
</template>
<script>
import TheSvgPicker from "@/components/TheSvgPicker.vue";
import TheMainTitle from "@/components/TheMainTitle.vue";
export default {
  components: { TheSvgPicker, TheMainTitle },
  methods: {
    addSaga(data) {
      console.log(data);
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
