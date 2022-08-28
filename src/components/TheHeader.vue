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
        <li v-for="(item, idx) in navBtns" :key="idx">
          <button :id="item.id">
            <img :src="item.svg" :alt="item.alt" draggable="false" />
            <!-- <img :src="item.svg" :alt="item.alt" /> -->
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navBtns: [
        {
          id: "search-button",
          alt: "search button",
          svg: require("@/assets/icons/search.svg"),
        },
        {
          id: "sagas-button",
          alt: "sagas button",
          svg: require("@/assets/icons/sagas.svg"),
        },
        {
          id: "categories-button",
          alt: "categories button",
          svg: require("@/assets/icons/categories.svg"),
        },
        {
          id: "chart-button",
          alt: "chart button",
          svg: require("@/assets/icons/chart-outline.svg"),
        },
        {
          id: "auth-button",
          alt: "auth button",
          svg: require("@/assets/icons/login.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: $neutral-color;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: 0 7rem;
  align-items: center;
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
      }
    }
  }
  nav {
    ul {
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
