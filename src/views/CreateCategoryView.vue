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
export default {
  components: { TheSvgPicker, TheMainTitle },
  methods: {
    addCategory(data) {
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
