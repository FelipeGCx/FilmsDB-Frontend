<template>
  <nav class="menu">
    <ul>
      <li>
        <router-link to="/all">
          <img
            :src="require('@/assets/icons/home-fill.svg')"
            alt="Home FilmsDB"
            draggable="false"
          />
        </router-link>
      </li>
      <li>
        <button @click="showFilters">
          <img
            :src="require('@/assets/icons/filters.svg')"
            alt="Filters FilmsDB"
            draggable="false"
          />
        </button>
      </li>
      <li>
        <router-link to="/">
          <img
            :src="require('@/assets/icons/add-fill.svg')"
            alt="Add Content FilmsDB"
            draggable="false"
          />
        </router-link>
      </li>
      <li>
        <img
          :src="require('@/assets/icons/chart-fill.svg')"
          alt="Charts FilmsDB"
          draggable="false"
        />
      </li>
      <li>
        <router-link to="/">
          <img
            :src="require('@/assets/icons/heart.svg')"
            alt="Favorites FilmsDB"
            draggable="false"
          />
        </router-link>
      </li>
    </ul>
  </nav>
  <the-menu-filters
    v-show="filtersVisibility"
    @changeVisibility="filtersVisibility = false"
  />
</template>

<script>
import TheMenuFilters from "@/components/TheMenuFilters.vue";

export default {
  components: { TheMenuFilters },
  data() {
    return {
      filtersVisibility: false,
    };
  },
  methods: {
    showFilters() {
      this.hideAll();
      this.$router.push({
        query: {
          active: "type",
        },
      });
      this.filtersVisibility = true;
    },
    hideAll() {},
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 0px) and (max-width: 500px) {
  .menu {
    display: flex !important;
  }
}
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
        opacity: 75%;
        &:hover {
          opacity: 95%;
        }
      }
    }
  }
}
</style>
