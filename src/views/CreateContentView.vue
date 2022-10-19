<template>
  <main>
    <section>
      <the-main-title :title="'new register'" :padding="space" />
      <the-load-content
        :content="filme"
        :action="'create'"
        @clicked="saveFilme"
        @filled="toTitle"
      />
    </section>
  </main>
</template>

<script>
import TheMainTitle from "@/components/TheMainTitle.vue";
import TheLoadContent from "@/components/TheLoadContent.vue";
export default {
  components: { TheMainTitle, TheLoadContent },
  data() {
    return {
      filme: {
        type: "Movie",
        title: "",
        titleOG: "",
        year: new Date().getFullYear(),
        note: 10,
        language: false,
        category: 0,
        favorite: false,
        info: " ",
        link: " ",
        poster:
          "https://firebasestorage.googleapis.com/v0/b/films-a2d18.appspot.com/o/assets%2FNot%20Found%20Image.webp?alt=media&token=8bfcfa56-b828-4db9-9c74-82e34324f673",
        season: 0,
        saga: 0,
      },
      space: "0px",
    };
  },
  methods: {
    saveFilme(data) {
      console.log(data);
    },
    toTitle(n) {
      n = (window.innerWidth - n) / 2;
      this.space = ` ${n}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  // gap: 1rem;
  width: 100%;
  margin: 2rem 6rem 0 6rem;
}
</style>
