<template>
  <header>
    <div class="logo">
      <router-link to="/" draggable="false">
        <img
          :src="require('@/assets/icons/filmsdb.svg')"
          alt="FilmsDB Logo"
          draggable="false"
        />
        <h1>FilmsDB</h1></router-link
      >
    </div>
    <nav>
      <ul>
        <li>
          <the-search :isClicked="isClicked" />
        </li>
        <li v-for="(item, idx) in navBtns" :key="idx">
          <!-- v-show="
            item.access == this.$isAdmin
              ? true
              : this.$isAdmin & item.access
              ? true
              : false
          " -->
          <button :id="item.id" @click="btnClicked(item.id)">
            <img :src="item.svg" :alt="item.alt" draggable="false" />
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import TheSearch from "./TheSearch.vue";
export default {
  components: { TheSearch },
  data() {
    return {
      isClicked: false,
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
          access: false,
        },
        {
          id: "categories-button",
          alt: "categories button",
          svg: require("@/assets/icons/categories.svg"),
          access: false,
        },
        {
          id: "chart-button",
          alt: "chart button",
          svg: require("@/assets/icons/chart-outline.svg"),
          access: false,
        },
        {
          id: "add-button",
          alt: "add button",
          svg: require("@/assets/icons/add.svg"),
          access: true,
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
    btnClicked(id) {
      switch (id) {
        case "search-button":
          this.isClicked = !this.isClicked;
          break;

        default:
          break;
      }
    },
  },
  mounted() {
    console.log(this.$isAdmin);
  },
};
</script>
<style lang="scss" scoped>
@media only screen and (min-width: 0px) and (max-width: 460px) {
  .logo {
    h1 {
      display: none;
    }
  }
}
@media only screen and (min-width: 0px) and (max-width: 620px) {
  header {
    z-index: 5;
    nav {
      ul {
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
      }
      h1 {
        font-weight: 700;
        font-style: italic;
        user-select: none;
        transition: all ease 1s;
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
            opacity: 0.9;
          }
        }
      }
    }
  }
}
</style>
