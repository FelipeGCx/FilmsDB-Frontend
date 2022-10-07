<template>
  <div>
    <nav class="filters">
      <ul>
        <li v-for="(item, idx) in navBtns" :key="idx">
          <button :id="item.id" @click="btnClicked(idx)">
            <img
              :src="eActive == item.e ? item.svgTwo : item.svg"
              :alt="item.alt"
              draggable="false"
            />
          </button>
        </li>
      </ul>
    </nav>
    <the-type-selector @clicked="hideComponent()" v-show="typeVisibility" />
    <the-sagas-selector @clicked="hideComponent()" v-show="sagasVisibility" />
    <the-categories-selector
      @clicked="hideComponent()"
      v-show="categoriesVisibility"
    />
    <the-year-selector @clicked="hideComponent()" v-show="yearVisibility" />
    <the-note-selector @clicked="hideComponent()" v-show="noteVisibility" />
  </div>
</template>

<script>
import TheTypeSelector from "@/components/TheTypeSelector.vue";
import TheSagasSelector from "@/components/TheSagasSelector.vue";
import TheCategoriesSelector from "@/components/TheCategoriesSelector.vue";
import TheYearSelector from "@/components/TheYearSelector.vue";
import TheNoteSelector from "@/components/TheNoteSelector.vue";
export default {
  components: {
    TheTypeSelector,
    TheSagasSelector,
    TheCategoriesSelector,
    TheYearSelector,
    TheNoteSelector,
  },
  data() {
    return {
      typeVisibility: true,
      sagasVisibility: false,
      categoriesVisibility: false,
      yearVisibility: false,
      noteVisibility: false,
      navBtns: [
        {
          id: "type-button",
          alt: "type button",
          svg: require("@/assets/icons/type.svg"),
          svgTwo: require("@/assets/icons/type-fill.svg"),
          e: "type",
        },
        {
          id: "sagas-button",
          alt: "sagas button",
          svg: require("@/assets/icons/sagas.svg"),
          svgTwo: require("@/assets/icons/sagas-fill.svg"),
          e: "sagas",
        },
        {
          id: "categories-button",
          alt: "categories button",
          svg: require("@/assets/icons/categories.svg"),
          svgTwo: require("@/assets/icons/categories-fill.svg"),
          e: "categories",
        },
        {
          id: "year-button",
          alt: "year button",
          svg: require("@/assets/icons/year.svg"),
          svgTwo: require("@/assets/icons/year-fill.svg"),
          e: "year",
        },
        {
          id: "note-button",
          alt: "note button",
          svg: require("@/assets/icons/note.svg"),
          svgTwo: require("@/assets/icons/note-fill.svg"),
          e: "note",
        },
      ],
    };
  },
  computed: {
    eActive() {
      // return this.$route.state || "type";
      return this.$route.query.active || "type";
    },
  },
  methods: {
    btnClicked(idx) {
      let element = this.navBtns[idx];
      let queries = this.$route.fullPath.split("?")[1].split("&");
      let dQueries = {};
      queries.forEach((query) => {
        query = query.split("=");
        dQueries[query[0]] = query[1];
      });
      dQueries["active"] = element.e;
      this.$router.push({
        query: dQueries,
      });
      this.hideAll();
      this.show(element.e);
    },
    hideAll() {
      this.typeVisibility = false;
      this.sagasVisibility = false;
      this.categoriesVisibility = false;
      this.yearVisibility = false;
      this.noteVisibility = false;
    },
    show(e) {
      switch (e) {
        case "type":
          this.typeVisibility = true;
          break;
        case "sagas":
          this.sagasVisibility = true;
          break;
        case "categories":
          this.categoriesVisibility = true;
          break;
        case "year":
          this.yearVisibility = true;
          break;
        case "note":
          this.noteVisibility = true;
          break;

        default:
          break;
      }
    },
    hideComponent() {
      this.$emit("changeVisibility");
      this.hideAll();
      this.show("type");
    },
  },
};
</script>

<style lang="scss" scoped>
.filters {
  z-index: 4;
  height: 4.7rem;
  width: 100vw;
  background-color: $neutral-color;
  position: fixed;
  left: 0;
  bottom: 4.7rem;
  transition: display ease 0.5s;
  ul {
    height: 100%;
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 5vw;
    li {
      button {
        cursor: pointer;
        img {
          filter: contrast(2) invert(1);
          width: 2.5rem;
          height: 2.5rem;
          opacity: 75%;
          &:hover {
            opacity: 95%;
          }
        }
      }
    }
  }
}
</style>
