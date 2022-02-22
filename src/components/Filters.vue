<template>
  <header>
    <!-- <Dropdown
      :name="'Type'"
      :values="['All', 'Movie', 'Anime', 'Serie']"
      :selected="typeFilm"
      :widthSelect="'6rem'"
      @valueSelect="showType"
    /> -->
    <DropdownLong
      :name="'Type'"
      :values="Types"
      :widthSelect="'9rem'"
      @valueSelect="showType"
    />
    <DropdownLong
      :name="'Category'"
      :values="Categories"
      :widthSelect="'9rem'"
      @valueSelect="showCategory"
    />
    <DropdownLong
      :name="'Saga'"
      :values="Sagas"
      :widthSelect="'9rem'"
      @valueSelect="showSaga"
    />
    <Search/>
    <!-- <div class="filter">
      <select class="type" name="type" id="type" v-model="typeFilm" @change="show">
        <option value="All">All</option>
        <option value="Movie">Movie</option>
        <option value="Serie">Serie</option>
        <option value="Anime">Anime</option>
      </select>
    </div>
    <div class="filter">
      <select class="year" name="year" id="year">
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div class="filter">
      <select class="note" name="note" id="note">
        <option value="High">High</option>
        <option value="Low">Low</option>
      </select>
    </div>
    <div class="filter">
      <select class="category" name="category" id="category">
        <option v-for="(item, idx) in Categories" :key="idx" :value="item.id">
          {{ item.category }}
        </option>
      </select>
    </div>
    <div class="filter">
      <select class="saga" name="saga" id="saga">
        <option v-for="(item, idx) in Sagas" :key="idx" :value="item.id">
          {{ item.saga }}
        </option>
      </select>
    </div>
    <button class="filter | favorite" >Favorites</button>
    <button class="filter | language">Language</button>
    <div><input class="search" type="search" /></div> -->
  </header>
</template>

<script>
import gql from "graphql-tag";
import Dropdown from "@/components/Dropdown.vue";
import DropdownLong from "@/components/DropdownLong.vue";
import Search from "@/components/Search.vue";
export default {
  name: "Filters",
  components: {
    Dropdown,
    DropdownLong,
    Search,
  },
  data() {
    return {
      FilmsDetail: null,
      typeFilm: this.$route.name,
      Types:[
        {name:"All",svg:"<path d='M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,14.67V9.33 c0-0.79,0.88-1.27,1.54-0.84l4.15,2.67c0.61,0.39,0.61,1.29,0,1.68l-4.15,2.67C10.38,15.94,9.5,15.46,9.5,14.67z'/>"},
        {name:"Movie",svg:"<path d='M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z'/>"},
        {name:"Serie",svg:"<path d='M18 4l1.82 3.64c.08.16-.04.36-.22.36h-1.98c-.38 0-.73-.21-.89-.55L15 4h-2l1.82 3.64c.08.16-.04.36-.22.36h-1.98c-.38 0-.73-.21-.89-.55L10 4H8l1.82 3.64c.08.16-.04.36-.22.36H7.62c-.38 0-.73-.21-.9-.55L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-.55-.45-1-1-1h-3z'/>"},
        {name:"Anime",svg:"<path d='M22,2.84L22,2.84c0-0.45-0.39-0.79-0.83-0.75L4.89,3.9C4.38,3.95,4,4.38,4,4.89V12H3.08c-0.6,0-1.08,0.53-1,1.13 C2.52,16.33,4.83,19,8,20.25V21c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-0.75c3.17-1.25,5.48-3.92,5.92-7.12 c0.08-0.6-0.4-1.13-1-1.13H10.5V8h10.75C21.66,8,22,7.66,22,7.25v0c0-0.41-0.34-0.75-0.75-0.75H10.5V4.78l10.83-1.19 C21.71,3.54,22,3.22,22,2.84z M6.5,5.22V6.5h-1V5.34L6.5,5.22z M5.5,8h1v4h-1V8z M9,12H8V8h1V12z M9,6.5H8V5.06l1-0.11V6.5z'/>"}
      ]
    };
  },
  // computed: {
  //   typeFilm: {
  //     get: function () {
  //       return this.$route.name;
  //     },
  //     set: function () {},
  //   },
  // },
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
    show() {
      switch (this.typeFilm) {
        case "Movie":
          this.$router.push({ name: "Movie", params: { page: 1 } });
          break;
        case "Serie":
          this.$router.push({ name: "Serie", params: { page: 1 } });
          break;
        case "Anime":
          this.$router.push({ name: "Anime", params: { page: 1 } });
          break;
        default:
          this.$router.push({ name: "All", params: { page: 1 } });
          break;
      }
    },
    showType(e) {
      this.typeFilm = e
      switch (this.typeFilm) {
        case "Movie":
          this.$router.push({ name: "Movie", params: { page: 1 } });
          break;
        case "Serie":
          this.$router.push({ name: "Serie", params: { page: 1 } });
          break;
        case "Anime":
          this.$router.push({ name: "Anime", params: { page: 1 } });
          break;
        default:
          this.$router.push({ name: "All", params: { page: 1 } });
          break;
      }
    },
    showSaga(e) {
      e = e.toLocaleLowerCase();
      this.$router.push({ name: "Saga", params: { id:e,page: 1 } });
    },
    showCategory(e) {
      e = e.toLocaleLowerCase();
      this.$router.push({ name: "Category", params: { id:e,page: 1 } });
    },
  },
  mounted() {
    this.typeFilm = this.$route.name;
  },
  afterUpdate() {
    this.typeFilm = this.$route.name;
  },
};
</script>

<style>
header {
  display: flex;
  height: 8vh;
  background-color: var(--bg-header);
  position: sticky;
  top: 0;
  z-index: 2;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.filter {
  background-color: var(--bg-loading);
  padding: 0rem 1rem;
  border-radius: var(--radius);
  /* border-radius: 5rem; */
  color: var(--color-clear);
  font-weight: 600;
  font-size: 1rem;
}
select {
  height: 2rem;
  border: 0.1rem solid var(--border-input);
  border-radius: var(--radius);
  outline: 0;
  padding: 0 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(../assets/icons/arrow_drop_down.svg);
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
}
</style>