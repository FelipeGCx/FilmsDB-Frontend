<template>
  <nav class="menu">
    <ul>
      <li v-for="(item, idx) in menuBtns" :key="idx">
        <button @click="goTo(item.go)">
          <img :src="item.img" :alt="item.alt" draggable="false" />
        </button>
      </li>
    </ul>
  </nav>
  <the-menu-filters
    v-show="filtersVisibility"
    @changeVisibility="filtersVisibility = false"
  />
  <the-charts v-show="chartVisibility" @clicked="chartVisibility = false" />
</template>

<script>
import TheMenuFilters from "@/components/TheMenuFilters.vue";
import TheCharts from "@/components/TheCharts.vue";

export default {
  components: { TheMenuFilters, TheCharts },
  data() {
    return {
      filtersVisibility: false,
      chartVisibility: false,
      menuBtns: [
        {
          img: require("@/assets/icons/home-fill.svg"),
          alt: "Home FilmsDB",
          go: "/",
        },
        {
          img: require("@/assets/icons/filters.svg"),
          alt: "Filters FilmsDB",
          go: "filters",
        },
        {
          img: require("@/assets/icons/add-fill.svg"),
          alt: "Add Content FilmsDB",
          go: "/create/content",
        },
        {
          img: require("@/assets/icons/chart-fill.svg"),
          alt: "Charts FilmsDB",
          go: "charts",
        },
        {
          img: require("@/assets/icons/heart.svg"),
          alt: "Favorites FilmsDB",
          go: "/favorites",
        },
      ],
    };
  },
  methods: {
    goTo(route) {
      switch (route) {
        case "filters":
          this.showFilters();
          break;
        case "charts":
          this.showCharts();
          break;

        default:
          this.$router.push({ path: route });
          this.filtersVisibility = false;
          this.chartVisibility = false;
          break;
      }
    },
    showFilters() {
      // this.$route.query.active = "type";
      if (this.$route.fullPath.includes("?")) {
        let queries = this.$route.fullPath.split("?").at(-1).split("&");
        let dQueries = {};
        queries.forEach((query) => {
          query = query.split("=");
          dQueries[query[0]] = query[1];
        });
        dQueries["active"] = "type";
        this.$router.push({
          query: dQueries,
        });
      } else {
        this.$router.push({
          query: {
            active: "type",
          },
        });
      }

      this.chartVisibility = false;
      this.filtersVisibility = true;
    },
    showCharts() {
      this.filtersVisibility = false;
      this.chartVisibility = true;
    },
  },
};
</script>

<style lang="scss" scoped>
// @media only screen and (min-width: 0px) and (max-width: 500px) {
//   .menu {
//     display: flex !important;
//   }
// }
.menu {
  z-index: 5;
  display: none;
  height: 4.7rem;
  width: 100vw;
  background-color: $primary-color;
  position: fixed;
  left: 0;
  bottom: 0;
  transition: display ease 0.5s;
  @include mobilesize {
    & {
      display: flex !important;
    }
  }
  ul {
    height: 100%;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    li {
      cursor: pointer;
      img {
        filter: contrast(2) invert(1);
        width: 2.7rem;
        height: 2.7rem;
      }
    }
  }
}
</style>
