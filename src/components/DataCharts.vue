<template>
  <div class="container">
    <ChartCircle
      :quantity="filmQuantity"
      :title="'Peliculas'"
      :percentage="filmPercentage"
    />
    <ChartCircle
      :quantity="animeQuantity"
      :title="'Animes'"
      :percentage="animePercentage"
    />
    <ChartCircle
      :quantity="serieQuantity"
      :title="'Series'"
      :percentage="seriePercentage"
    />
  </div>
</template>

<script>
import gql from "graphql-tag";
import ChartCircle from "@/components/ChartCircle.vue";

export default {
  data() {
    return {
      FilmsDetail: [],
      animeQuantity: 0,
      filmQuantity: 0,
      serieQuantity: 0,
      filmPercentage: 0,
      animePercentage: 0,
      seriePercentage: 0,
      total: 0,
    };
  },
  components: {
    ChartCircle,
  },
  // get query of all content
  apollo: {
    FilmsDetail: {
      query: gql`
        query GetFilmsByType($filmsType: String) {
          getFilmsByType(filmsType: $filmsType) {
            type
          }
        }
      `,
      variables() {
        return {
          filmsType: "all",
        };
      },
      update: (data) => data.getFilmsByType,
      result() {
        this.generateData();
      },
    },
  },
  methods: {
    // manipulate the data for get the quantity and the percentage
    generateData() {
      this.FilmsDetail.forEach((film) => {
        this.total++;
        switch (film.type) {
          case "Anime":
            this.animeQuantity++;
            break;
          case "Movie":
            this.filmQuantity++;
            break;
          case "Serie":
            this.serieQuantity++;
            break;
        }
      });
      this.filmPercentage = Math.floor(this.filmQuantity / (this.total / 100));
      this.animePercentage = Math.floor(
        (this.animeQuantity / this.total) * 100
      );
      this.seriePercentage = Math.floor(
        (this.serieQuantity / this.total) * 100
      );
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 1rem;
}
</style>