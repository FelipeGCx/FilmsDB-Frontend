<template>
  <div class="type">
    <the-button-close @btnClicked="$emit('clicked')" />

    <nav class="types | blur">
      <the-loading v-if="loading" />
      <the-error v-else-if="error" :refetch="true" @reload="reloadTheQuery()" />
      <ul v-else-if="charts">
        <li v-for="item in charts.data" :key="item.type">
          <the-charts-circle
            :percentage="percentage(item.elements)"
            :color="color(item.type)"
          />
          <p>{{ item.elements }} {{ item.type }}s</p>
        </li>
      </ul>
      <the-empty v-else />
    </nav>
  </div>
</template>

<script>
// import variables from "@/sass/_variables.scss";
import gql from "graphql-tag";
import TheButtonClose from "@/components/TheButtonClose.vue";
import TheChartsCircle from "@/components/TheChartsCircle.vue";
import TheLoading from "@/components/TheLoading.vue";
import TheError from "@/components/TheError.vue";
import queryParams from "@/mixins/queries/queryParams.js";
import TheEmpty from "@/components/TheEmpty.vue";

export default {
  components: {
    TheButtonClose,
    TheLoading,
    TheError,
    TheEmpty,
    TheChartsCircle,
  },
  mixins: [queryParams],
  data() {
    return {
      charts: null,
    };
  },
  methods: {
    percentage(elements) {
      let totalElements = 0;
      this.charts.data.forEach((element) => {
        totalElements += element.elements;
      });
      return Math.round((100 / totalElements) * elements * 100) / 100;
    },
    color(type) {
      switch (type) {
        case "Anime":
          return "#fff";
        case "Movie":
          return "#fff";
        case "Serie":
          return "#fff";
        default:
          return "#fff";
      }
    },
  },
  apollo: {
    charts: {
      query: gql`
        query GetCharts {
          getCharts {
            data {
              type
              elements
            }
            error
          }
        }
      `,
      update(data) {
        return data.getCharts;
      },
      error(error) {
        this.tt = error;
        this.error = true;
      },
      watchLoading(isLoading) {
        this.loading = isLoading;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.type {
  position: fixed;
  width: 100%;
  top: 5.4rem;
  right: 0;
  bottom: 4.7rem;
  .types {
    z-index: 3;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;
    align-items: center;
    &::-webkit-scrollbar {
      width: 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      height: 100%;
      width: 100%;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        button {
          background-color: $base-color;
          border: 0.2rem solid $primary-color;
          padding: 0.3rem 1.7rem;
          border-radius: $border-radius;
          //   border-radius: $border-radius;
          a {
            display: flex;
            align-items: center;
            gap: 1rem;
            svg {
              color: $secondary-color;
              width: 2.4rem;
            }
          }
        }
        p {
          color: $secondary-color;
          font-weight: 500;
          // font-family: "Montserrat", sans-serif;
        }
      }
    }
  }
}
li {
  font-size: 3rem;
}
</style>
