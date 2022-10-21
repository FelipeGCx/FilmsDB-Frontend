<template>
  <header>
    <div class="logo">
      <router-link to="/" draggable="false" @click="hideAll">
        <img :src="logo.img" :alt="logo.alt" draggable="false" />
        <h1>{{ logo.title }}</h1></router-link
      >
    </div>
    <nav>
      <ul>
        <li>
          <the-search :isClicked="isClicked" />
        </li>
        <li v-for="(item, idx) in navBtns" :key="idx">
          <the-dropdown-image
            v-if="item.id == 'add-button'"
            :id="item.id"
            :obj="item"
            @click="hideAll()"
          />
          <button v-else :id="item.id" @click="btnClicked(item.id, idx)">
            <img :src="item.svg" :alt="item.alt" draggable="false" />
          </button>
        </li>
      </ul>
    </nav>
    <the-sagas-selector
      class="sagas-c"
      @clicked="hideAll()"
      v-show="sagasVisibility"
    />
    <the-categories-selector
      class="categories-c"
      @clicked="hideAll()"
      v-show="categoriesVisibility"
    />
    <the-charts
      class="charts-c"
      @clicked="hideAll()"
      v-show="chartsVisibility"
    />
  </header>
</template>

<script>
import TheSearch from "@/components/TheSearch.vue";
import TheSagasSelector from "@/components/TheSagasSelector.vue";
import TheCategoriesSelector from "@/components/TheCategoriesSelector.vue";
import TheCharts from "@/components/TheCharts.vue";
import TheDropdownImage from "@/components/TheDropdownImage.vue";
export default {
  components: {
    TheSearch,
    TheSagasSelector,
    TheCategoriesSelector,
    TheCharts,
    TheDropdownImage,
  },
  data() {
    return {
      isClicked: false,
      sagasVisibility: false,
      categoriesVisibility: false,
      chartsVisibility: false,
      searchColor: "0.6",
      sagasColor: "0.6",
      categoriesColor: "0.6",
      chartsColor: "0.6",
      logo: {
        img: require("@/assets/icons/filmsdb.svg"),
        alt: "FilmsDB Logo",
        title: "FilmsDB",
      },
      navBtns: [
        {
          id: "search-button",
          alt: "search button",
          svg: require("@/assets/icons/search.svg"),
          access: false,
        },
        {
          id: "sagas-button",
          alt: "sagas button",
          svg: require("@/assets/icons/sagas.svg"),
          svgOne: require("@/assets/icons/sagas.svg"),
          svgTwo: require("@/assets/icons/sagas-fill.svg"),
          access: false,
        },
        {
          id: "categories-button",
          alt: "categories button",
          svg: require("@/assets/icons/categories.svg"),
          svgOne: require("@/assets/icons/categories.svg"),
          svgTwo: require("@/assets/icons/categories-fill.svg"),
          access: false,
        },
        {
          id: "chart-button",
          alt: "chart button",
          svg: require("@/assets/icons/chart-outline.svg"),
          svgOne: require("@/assets/icons/chart-outline.svg"),
          svgTwo: require("@/assets/icons/chart-fill.svg"),
          access: false,
        },
        {
          id: "add-button",
          alt: "add button",
          svg: require("@/assets/icons/add.svg"),
          access: true,
          options: [
            {
              name: "Add Content",
              alt: "add content",
              svg: require("@/assets/icons/add.svg"),
              route: "/create/content",
            },
            {
              name: "Add Saga",
              alt: "add saga",
              svg: require("@/assets/icons/add.svg"),
              route: "/create/saga",
            },
            {
              name: "Add Category",
              alt: "add category",
              svg: require("@/assets/icons/add.svg"),
              route: "/create/category",
            },
          ],
        },
        {
          id: "auth-button",
          alt: "auth button",
          svg: require("@/assets/icons/login.svg"),
          access: false,
        },
      ],
    };
  },
  methods: {
    btnClicked(id, idx) {
      let element = this.navBtns[idx];
      switch (id) {
        case "search-button":
          this.hideAll();
          this.isClicked = !this.isClicked;
          this.searchColor = this.isClicked ? "1" : "0.6";
          break;
        case "sagas-button":
          this.hideAll();
          this.sagasVisibility = !this.sagasVisibility;
          element.svg = this.sagasVisibility ? element.svgTwo : element.svgOne;
          this.sagasColor = this.sagasVisibility ? "1" : "0.6";
          break;
        case "categories-button":
          this.hideAll();
          this.categoriesVisibility = !this.categoriesVisibility;
          element.svg = this.categoriesVisibility
            ? element.svgTwo
            : element.svgOne;
          this.categoriesColor = this.categoriesVisibility ? "1" : "0.6";
          break;
        case "chart-button":
          this.hideAll();
          this.chartsVisibility = !this.chartsVisibility;
          element.svg = this.chartsVisibility ? element.svgTwo : element.svgOne;
          this.chartsColor = this.chartsVisibility ? "1" : "0.6";
          break;
        case "auth-button":
          this.hideAll();
          this.$router.push({ name: "Login" });
          break;

        default:
          break;
      }
    },
    hideAll() {
      this.sagasVisibility = false;
      this.categoriesVisibility = false;
      this.chartsVisibility = false;
      this.sagasColor = "0.6";
      this.categoriesColor = "0.6";
      this.chartsColor = "0.6";
      this.searchColor = "0.6";
      this.navBtns.forEach((element) => {
        element.svg = element.svgOne || element.svg;
      });
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth < 450) this.hideAll();
    });
  },
};
</script>
<style lang="scss" scoped>
header {
  background-color: $neutral-color;
  height: 5.4rem;
  // height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: 0 7vw;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  .logo {
    a {
      display: inline-flex;
      gap: 1rem;
      align-items: center;
      img {
        filter: invert(1);
        width: 3.3rem;
        height: 3.3rem;
        pointer-events: none;
        transition: all 0.3s ease;
      }
      h1 {
        font-weight: 700;
        font-style: italic;
        user-select: none;
        transition: all 0.3s ease;
        @include mobilesize {
          & {
            display: none;
          }
        }
        @include tabletsize {
          & {
            display: none;
          }
        }
      }
    }
    &:hover {
      img {
        transform: rotate(360deg) scale(1.05);
      }
      h1 {
        transform: scale(1.1);
      }
    }
  }
  nav {
    ul {
      transition: all ease 1s;
      display: flex;
      gap: 0.5rem;
      li {
        button {
          padding: 0;
          img {
            filter: invert(1);
            opacity: 0.6;
            width: 2.7rem;
            height: 2.7rem;
            pointer-events: none;
          }
        }
        &:hover {
          img {
            opacity: 0.9 !important;
          }
        }

        #search-button {
          img {
            opacity: v-bind(searchColor);
          }
        }
        #sagas-button {
          img {
            opacity: v-bind(sagasColor);
          }
        }
        #categories-button {
          img {
            opacity: v-bind(categoriesColor);
          }
        }
        #chart-button {
          img {
            opacity: v-bind(chartsColor);
          }
        }
      }
      @include mobilesize {
        & {
          gap: 0 !important;
          #sagas-button,
          #categories-button,
          #chart-button,
          #add-button {
            display: none;
          }
          #search-button {
            padding-right: 0.5rem;
          }
        }
      }
    }
  }
  .sagas-c,
  .categories-c,
  .charts-c {
    width: 35rem;
    height: 100%;
  }
}
</style>
