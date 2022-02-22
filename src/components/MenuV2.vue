<template>
  <div v-show="yearContainer" class="drop-container | year-drop">
    <div class="drop-blur" @click="hideYear"></div>
    <YearSelector class="year-selector" @searchYear="yearContainer = false" />
  </div>
  <div v-show="typeContainer" class="drop-container | type-drop">
    <div class="drop-blur" @click="hideType"></div>
    <div class="type-selector">
      <button v-for="(item, index) in Types" :key="index" @click="hideType">
        <router-link
          class="saga-btn"
          :to="{ name: item.name, query: { page: 1 } }"
        >
          <svg v-html="item.svg" viewBox="0 0 24 24"></svg>
          {{ item.name }}
        </router-link>
      </button>
    </div>
  </div>
  <div v-show="sagasContainer" class="drop-container | saga-drop">
    <div class="drop-blur" @click="hideSaga"></div>
    <div class="sagas-selector">
      <button v-for="(item, index) in Sagas" :key="index" @click="hideSaga">
        <router-link
          class="saga-btn"
          :to="{ name: 'Saga', params: { id: item.saga}, query:{page: 1 } }"
        >
          <svg v-html="item.svg" viewBox="0 0 24 24"></svg>
          {{ item.saga }}
        </router-link>
      </button>
    </div>
  </div>
  <div v-show="categoryContainer" class="drop-container | category-drop">
    <div class="drop-blur" @click="hideCategory"></div>
    <div class="sagas-selector">
      <button
        v-for="(item, index) in Categories"
        :key="index"
        @click="hideCategory"
      >
        <router-link
          class="saga-btn"
          :to="{ name: 'Category', params: { id: item.category},query:{ page: 1 } }"
        >
          <svg v-html="item.svg" viewBox="0 0 24 24"></svg>
          {{ item.category }}
        </router-link>
      </button>
    </div>
  </div>
  <div v-show="menuFilter" class="drop-container | filter-drop">
    <div class="drop-blur" @click="hideFilter"></div>
    <div class="filter-in-drop | filters-mobile">
      <button
        class="btn1"
        :style="[positionFilter]"
        @click="
          hideFilter();
          yearContainer = true;
        "
      >
        Año
      </button>
      <button class="btn2" :style="[positionFilter]">Nota</button>
      <button
        class="btn3"
        :style="[positionFilter]"
        @click="
          hideFilter();
          typeContainer = true;
        "
      >
        Type
      </button>
      <button
        class="btn4"
        :style="[positionFilter]"
        @click="
          hideFilter();
          sagasContainer = true;
        "
      >
        Sagas
      </button>
      <button
        class="btn5"
        :style="[positionFilter]"
        @click="
          hideFilter();
          categoryContainer = true;
        "
      >
        Categorias
      </button>
    </div>
  </div>
  <div v-show="menuSearch" class="drop-container | search-drop">
    <div class="drop-blur" @click="hideSearch"></div>
    <Search
      class="search-in-drop"
      @hideSearch="hideSearch"
      :style="positionSearch"
    />
  </div>
  <div class="menu">
    <router-link
      class="icon"
      :to="{
        name: 'All',
        query: { page: 1 },
      }"
    >
      <svg viewBox="0 0 24 24">
        <path
          d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        />
      </svg>
    </router-link>
    <div class="icon | btnFilter" @click="clickFilter">
      <svg viewBox="0 0 24 24">
        <path
          d="M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
        />
      </svg>
    </div>
    <div class="icon" @click="clickSearch">
      <svg viewBox="0 0 24 24">
        <path
          d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
      </svg>
    </div>
    <router-link class="icon" to="/create">
      <svg viewBox="0 0 24 24">
        <path
          d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
        />
      </svg>
    </router-link>
    <router-link
      class="icon"
      :to="{
        name: 'Favorite',
        query: { page: 1 },
      }"
    >
      <svg viewBox="0 0 24 24">
        <path
          d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
import Search from "./Search.vue";
import YearSelector from "./YearSelector.vue";
import gql from "graphql-tag";

export default {
  components: { Search, YearSelector },
  name: "Menu",
  data() {
    return {
      menuFilter: false,
      menuSearch: false,
      yearContainer: false,
      typeContainer: false,
      sagasContainer: false,
      categoryContainer: false,
      positionSearch: "transform: translateY(-5rem)",
      positionFilter: "transform: translateX(-16rem)",
      flagFilter: 0,
      Types: [
        {
          name: "All",
          svg: "<path d='M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,14.67V9.33 c0-0.79,0.88-1.27,1.54-0.84l4.15,2.67c0.61,0.39,0.61,1.29,0,1.68l-4.15,2.67C10.38,15.94,9.5,15.46,9.5,14.67z'/>",
        },
        {
          name: "Movie",
          svg: "<path d='M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z'/>",
        },
        {
          name: "Serie",
          svg: "<path d='M18 4l1.82 3.64c.08.16-.04.36-.22.36h-1.98c-.38 0-.73-.21-.89-.55L15 4h-2l1.82 3.64c.08.16-.04.36-.22.36h-1.98c-.38 0-.73-.21-.89-.55L10 4H8l1.82 3.64c.08.16-.04.36-.22.36H7.62c-.38 0-.73-.21-.9-.55L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-.55-.45-1-1-1h-3z'/>",
        },
        {
          name: "Anime",
          svg: "<path d='M22,2.84L22,2.84c0-0.45-0.39-0.79-0.83-0.75L4.89,3.9C4.38,3.95,4,4.38,4,4.89V12H3.08c-0.6,0-1.08,0.53-1,1.13 C2.52,16.33,4.83,19,8,20.25V21c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-0.75c3.17-1.25,5.48-3.92,5.92-7.12 c0.08-0.6-0.4-1.13-1-1.13H10.5V8h10.75C21.66,8,22,7.66,22,7.25v0c0-0.41-0.34-0.75-0.75-0.75H10.5V4.78l10.83-1.19 C21.71,3.54,22,3.22,22,2.84z M6.5,5.22V6.5h-1V5.34L6.5,5.22z M5.5,8h1v4h-1V8z M9,12H8V8h1V12z M9,6.5H8V5.06l1-0.11V6.5z'/>",
        },
      ],
    };
  },
  apollo: {
    Sagas: {
      query: gql`
        query GetSagas {
          getSagas {
            id
            saga
            svg
          }
        }
      `,
      update: (data) => data.getSagas,
    },
    Categories: {
      query: gql`
        query GetCategories {
          getCategories {
            id
            category
            svg
          }
        }
      `,
      update: (data) => data.getCategories,
    },
  },
  methods: {
    clickSearch() {
      this.hideFilter();
      this.menuSearch = !this.menuSearch;
      this.positionSearch = "transform: translateY(4rem)";
    },
    clickFilter() {
      if (this.flagFilter == 0) {
        this.hideSearch();
        this.menuFilter = true;
        setTimeout(() => {
          this.positionFilter = "transform: translateX(0rem)";
        }, 1000);
        this.flagFilter = 1;
      } else {
        this.hideFilter();
      }
    },
    hideSearch() {
      this.menuSearch = false;
      this.positionSearch = "transform: translateY(-5rem)";
    },
    hideYear() {
      this.yearContainer = false;
    },
    hideType() {
      this.typeContainer = false;
    },
    hideSaga() {
      this.sagasContainer = false;
    },
    hideCategory() {
      this.categoryContainer = false;
    },
    hideFilter() {
      this.flagFilter = 0;
      this.menuFilter = false;
      this.positionFilter = "transform: translateX(-16rem)";
    },
  },
};
</script>

<style scoped>
.drop-container {
  position: fixed;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  top: 0;
}
.filter-drop {
  justify-content: flex-start;
  align-items: flex-end;
}
.search-drop {
  justify-content: center;
}
.year-drop,
.type-drop {
  justify-content: center;
  align-items: center;
}
.saga-drop,
.category-drop {
  justify-content: center;
  align-items: flex-start;
}
.drop-blur {
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 15;
  height: 100%;
  backdrop-filter: blur(5.5px);
}
.search-in-drop {
  animation: animSearch 1s linear;
}
.search-in-drop,
.filter-in-drop {
  z-index: 16;
}
.menu {
  z-index: 16;
}

.menu {
  position: sticky;
  bottom: 0;
  background-color: var(--bg-loading);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 1rem;
}
svg {
  /* width:2rem;
    height: 2rem; */
  fill: var(--color-clear);
}
.icon {
  width: 2rem;
  height: 2rem;
  cursor: pointer;
}
.filters-mobile {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 15;
  padding: 5rem 2rem;
}
.filters-mobile button {
  font-weight: 600;
}
button {
  border: none;
  padding: 0.7rem 1rem;
  background-color: var(--bg-loading);
  border-radius: 5rem;
  color: var(--color-clear);
  text-align: start;
  width: fit-content;
  cursor: pointer;
  transition: all 5s ease;
}
.btn1 {
  animation: animBtn 1s linear;
  animation-delay: 0s;
  animation-iteration-count: unset;
}
.btn2 {
  animation: animBtn 1s linear;
  animation-delay: 0.2s;
}
.btn3 {
  animation: animBtn 1s linear;
  animation-delay: 0.4s;
}
.btn4 {
  animation: animBtn 1s linear;
  animation-delay: 0.6s;
}
.btn5 {
  animation: animBtn 1s linear;
  animation-delay: 0.8s;
}
.year-selector {
  animation: animYear 1s linear;
}
.type-selector {
  display: flex;
  flex-direction: column;
  z-index: 16;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.type-selector button {
  border: solid 0.2rem var(--bg-loading);
  background-color: var(--bg-body);
  font-weight: 600;
  white-space: nowrap;
  padding: 0.2rem 0.8rem;
  transition: all 0.1s ease;
}
.type-selector button:hover {
  background-color: var(--bg-loading);
}
.type-selector button svg {
  width: 2rem;
  height: 2rem;
}
.sagas-selector {
  display: flex;
  z-index: 16;
  width: 95%;
  gap: 0.6rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1rem;
}
.sagas-selector button {
  border: solid 0.2rem var(--bg-loading);
  background-color: var(--bg-body);
  font-weight: 600;
  white-space: nowrap;
  padding: 0.2rem 0.8rem;
  transition: all 0.1s ease;
}
.sagas-selector button:hover {
  background-color: var(--bg-loading);
}
.sagas-selector button svg {
  width: 2rem;
  height: 2rem;
}
.saga-btn {
  display: flex;
  gap: 1rem;
  align-items: center;
  text-decoration: none;
  color: var(--color-clear);
}
@keyframes animBtn {
  0% {
    transform: translateX(-16rem);
  }
  50% {
    transform: translateX(0.5rem);
  }
  75% {
    transform: translateX(-0.5rem);
  }
  100% {
    transform: translateX(0rem);
  }
}

@keyframes animSearch {
  0% {
    transform: translateY(-2rem);
  }
  50% {
    transform: translateY(5rem);
  }
  75% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(4rem);
  }
}
@keyframes animYear {
  0% {
    transform: translateY(50rem);
  }
  50% {
    transform: translateY(-3rem);
  }
  75% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(0rem);
  }
}
</style>