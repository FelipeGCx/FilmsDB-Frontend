<template>
  <ul class="films" ref="contentVisualization">
    <li
      class="film"
      v-for="(item, idx) in contentDetails"
      :key="item.id"
      :class="item.type"
      ref="itemVisualization"
      :tabindex="idx"
    >
      <div class="information">
        <div class="main-data">
          <a
            v-if="isVoid(item.link)"
            class="a-normal"
            :href="item.link"
            target="blank"
            tabindex="-1"
            >{{ item.titleOG }}</a
          >
          <p v-else>{{ item.titleOG }}</p>
          <p>{{ item.title }}</p>
        </div>
        <div class="more-data">
          <div
            class="season"
            data-tooltip="season"
            data-flow="right"
            :data-opacity="seasonOpacity(item.season)"
          >
            <span class="pin">{{ item.season }}</span>
          </div>
          <div class="rigth-icons">
            <router-link
              class="svg-icon"
              data-tooltip="category"
              data-flow="left"
              v-show="isVoid(item.category.svg)"
              :to="goToCategory(item.category)"
              tabindex="-1"
            >
              <svg v-html="item.category.svg" viewBox="0 0 24 24"></svg>
            </router-link>
            <span class="year || pin" data-tooltip="year" data-flow="left"
              >{{ item.year }}
            </span>
            <router-link
              class="svg-icon"
              data-tooltip="saga"
              data-flow="left"
              v-show="isVoid(item.saga.svg)"
              :to="goToSaga(item.saga)"
              tabindex="-1"
            >
              <svg v-html="item.saga.svg" viewBox="0 0 24 24"></svg>
            </router-link>

            <div
              v-show="item.language"
              data-tooltip="original"
              data-flow="left"
            >
              <svg viewBox="0 0 24 24">
                <path
                  d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03c1.74-1.94 2.98-4.17 3.71-6.53h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18C11.5 7.92 10.44 9.75 9 11.35c-.81-.89-1.49-1.86-2.06-2.88-.16-.29-.45-.47-.78-.47-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87c-.4.39-.4 1.03 0 1.42.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7l1.62-4.33L19.12 17h-3.24z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <img
        :src="item.poster"
        class="poster"
        loading="lazy"
        oncontextmenu="return false"
        oncopy="return false"
        oncut="return false"
        draggable="false"
        :alt="item.title"
        onerror="this.onerror=null; this.src='https://firebasestorage.googleapis.com/v0/b/films-a2d18.appspot.com/o/assets%2FNot%20Found%20Image.webp?alt=media&token=8bfcfa56-b828-4db9-9c74-82e34324f673'"
      />
      <div class="icons">
        <router-link
          :to="goToEdit(item)"
          data-tooltip="edit"
          data-flow="top"
          tabindex="-1"
        >
          <img :src="imgEdit" alt="edit" />
        </router-link>
        <div data-tooltip="favorite" data-flow="top">
          <img :src="favoriteImage(item.favorite)" alt="favorite" />
        </div>
        <span class="note || pin" data-tooltip="note" data-flow="top"
          >{{ normalizeNote(item.note) }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
import reziseListener from "@/mixins/reziseListener";

export default {
  name: "FilmsView",
  props: {
    contentDetails: {
      type: Object,
      // require: true,
    },
  },
  mixins: [reziseListener],
  data() {
    return {
      Categories: null,
      categoriesStatus: false,
      Sagas: null,
      sagasStatus: false,
      windowWidth: 8000,
      imgEdit: require("@/assets/icons/edit.svg"),
      imgFav: require("@/assets/icons/heart.svg"),
      imgNoFav: require("@/assets/icons/heart-outline.svg"),
    };
  },
  watch: {
    windowWidth() {
      let w = this.$refs.contentVisualization.offsetWidth;
      let wi = this.$refs.itemVisualization[0].offsetWidth + 10;
      let nE = Math.floor(w / wi);
      let tW = nE * wi;
      this.$emit("filled", tW);
    },
  },
  methods: {
    isVoid(value) {
      return value != " ";
    },
    // transform the note to a string for visualize it best
    normalizeNote(note) {
      return note % 1 == 0 && note != 10 ? `${note}.0` : note;
    },
    // change the router to update view
    update(item) {
      this.$router.push({
        name: "Update",
        params: { title: item.title },
        query: { s: item.season },
      });
    },
    goToCategory(item) {
      return {
        name: "Category",
        query: {
          category: item.category,
          page: 1,
        },
      };
    },
    goToSaga(item) {
      return {
        name: "Saga",
        query: {
          saga: item.saga,
          page: 1,
        },
      };
    },
    goToEdit(item) {
      return {
        name: "UpdateContent",
        query: {
          title: item.titleOG,
          s: item.season,
        },
      };
    },
    favoriteImage(bool) {
      return bool ? this.imgFav : this.imgNoFav;
    },
    seasonOpacity(season) {
      return season == 0 ? 0 : 100;
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 0px) and (max-width: 500px) {
  .films {
    .poster {
      height: 35rem !important;
      width: 23rem !important;
    }
  }
}

.films {
  gap: 1.2rem;
  // margin: 0 3vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  /* min-height: 70vh; */
  .film {
    border: 0.2em solid transparent;
    border-radius: 1rem;
    cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpolygon style='fill:%23FFFFFF;stroke:%23303030;stroke-linecap:square;stroke-linejoin:bevel;stroke-miterlimit:10;' points='6.5,3.5 6.5,20.5 11,15 18,15 '/%3E%3C/svg%3E"),
      pointer;
    position: relative;
    overflow: hidden !important;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
    text-overflow: ellipsis !important;
    transition: all 1s ease;
    display: flex;
    justify-content: center;
    user-select: none;
    &.Anime {
      @include tooltip($anime-color);
      &:hover,
      &:focus {
        filter: drop-shadow(0 0 1rem $anime-color);
        border-color: $anime-color;
      }
    }
    &.Movie {
      @include tooltip($movie-color);
      &:hover,
      &:focus {
        filter: drop-shadow(0 0 1rem $movie-color);
        border-color: $movie-color;
      }
    }
    &.Serie {
      @include tooltip($serie-color);
      &:hover,
      &:focus {
        filter: drop-shadow(0 0 1rem $serie-color);
        border-color: $serie-color;
      }
    }
    & > .poster {
      height: 30.5rem;
      width: 20rem;
    }
    .information {
      align-items: flex-start;
      color: $secondary-color;
      display: flex;
      flex-direction: column;
      grid-gap: 0.7rem;
      position: absolute;
      transform: translate3d(0, -100%, 0);
      transition: all 0.5s ease;
      z-index: 1;
      width: 100%;
      padding: 1rem;
      p {
        font-weight: 500;
      }
      .main-data {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-bottom: 1rem;
        .a-normal {
          color: inherit;
          text-decoration: inherit;
          font-size: 1.1rem;
        }
      }
      .more-data {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .season {
          height: 100%;
          transform: translateX(-100%);
          transition: all 0.3s linear;
          transition-delay: 0.2s;
          &[data-opacity="0"] {
            opacity: 0;
          }
          &[data-opacity="100"] {
            opacity: 1;
          }
        }
        .rigth-icons {
          display: flex;
          flex-direction: column;
          grid-gap: 0.7rem;
          align-items: flex-end;
          transform: translate3d(100%, -77%, 0);
          transition: all 0.3s linear;
          transition-delay: 0.2s;
        }
      }
    }
    .poster {
      transition: all 0.5s ease-out;
    }
    .icons {
      position: absolute;
      display: flex;
      width: 100%;
      padding: 0 3rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      transform: translateX(-100%);
      bottom: 1rem;
      // transform: translate3d(-22em, 0, 0);
      transition: all 0.5s ease;
      z-index: 3;
      .edit:hover {
        filter: drop-shadow(0 0 1rem $secondary-color);
      }
      a,
      div {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        filter: invert(1);
        width: 2.5rem;
        height: 2.5rem;
      }
    }
    svg {
      fill: $secondary-color;
      width: 2.5rem;
    }
    &:hover,
    &:focus {
      outline: none;
      .information {
        transform: translate3d(0, 0, 0);
        .more-data {
          .season {
            transform: translateX(0);
          }
          .rigth-icons {
            transform: translate3d(0, 0, 0);
          }
        }
      }
      .poster {
        filter: blur(0.2rem) brightness(0.7);
        transform: scale(110%);
      }
      .icons {
        transform: translateX(0);
      }
    }
  }
}
</style>
