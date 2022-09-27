<template>
  <ul class="films">
    <li
      class="film"
      v-for="item in contentDetails"
      :key="item.id"
      :class="item.type"
    >
      <div class="information">
        <div class="main-data">
          <a
            v-if="item.link != ' '"
            class="a-normal"
            :href="item.link"
            target="blank"
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
            :style="{ opacity: item.season == 0 ? 0 : 100 }"
          >
            <span class="pin">{{ item.season }}</span>
          </div>
          <div class="rigth-icons">
            <router-link
              class="svg-icon"
              data-tooltip="category"
              data-flow="left"
              v-show="item.category.svg != ' '"
              to="/"
            >
              <!-- :to="{
                name: 'Category',
                params: {
                  title: `Categoria: ${item.category.category}`,
                  id: item.category.category,
                },
                query: { page: 0 },
              }" -->
              <svg
                v-html="item.category.svg"
                viewBox="0 0 24 24"
                data-v-fae5bece=""
              ></svg>
            </router-link>
            <span class="year || pin" data-tooltip="year" data-flow="left"
              >{{ item.year }}
            </span>
            <router-link
              class="svg-icon"
              data-tooltip="saga"
              data-flow="left"
              v-show="item.saga.svg != ' '"
              to="/"
            >
              <!-- :to="{
                name: 'Saga',
                params: {
                  title: `Categoria: ${item.saga.saga}`,
                  id: item.saga.saga,
                },
                query: { page: 0 },
              }" -->
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
        :alt="item.title"
        onerror="this.onerror=null; this.src='https://firebasestorage.googleapis.com/v0/b/films-a2d18.appspot.com/o/assets%2FNot%20Found%20Image.webp?alt=media&token=8bfcfa56-b828-4db9-9c74-82e34324f673'"
      />
      <div class="icons">
        <div data-tooltip="edit" data-flow="top">
          <svg
            @click="update(item)"
            class="edit"
            viewBox="0 0 24 24"
            style="cursor: pointer"
            @mouseenter="this.hover = true"
            @mouseleave="this.hover = false"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
            />
          </svg>
        </div>
        <div data-tooltip="favorite" data-flow="top">
          <svg viewBox="0 0 24 24">
            <path
              v-show="item.favorite"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
            />
            <path
              v-show="!item.favorite"
              d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
            />
          </svg>
        </div>
        <span class="note || pin" data-tooltip="note" data-flow="top"
          >{{ normalizeNote(item.note) }}
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FilmsView",
  props: {
    contentDetails: {
      type: Object,
      // require: true,
    },
  },
  data() {
    return {
      Categories: null,
      categoriesStatus: false,
      Sagas: null,
      sagasStatus: false,
    };
  },
  methods: {
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
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 0px) and (max-width: 500px) {
  .films {
    .poster {
      height: 35em !important;
      width: 23em !important;
    }
  }
}

.films {
  gap: 1.2em;
  margin: 0 3vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* min-height: 70vh; */
  .film {
    border: 0.2em solid transparent;
    border-radius: 1em;
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
    &.Anime {
      @include tooltip($anime-color);
      &:hover {
        filter: drop-shadow(0 0 1rem $anime-color);
        border-color: $anime-color;
      }
    }
    &.Movie {
      @include tooltip($movie-color);
      &:hover {
        filter: drop-shadow(0 0 1rem $movie-color);
        border-color: $movie-color;
      }
    }
    &.Serie {
      @include tooltip($serie-color);
      &:hover {
        filter: drop-shadow(0 0 1rem $serie-color);
        border-color: $serie-color;
      }
    }
    & > .poster {
      // height: 26em;
      height: 30em;
      // width: 17em;
      width: 20em;
    }
    .information {
      align-items: flex-start;
      color: $secondary-color;
      display: flex;
      flex-direction: column;
      grid-gap: 0.7em;
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
          font-size: 1.1em;
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
        }
        .rigth-icons {
          display: flex;
          flex-direction: column;
          grid-gap: 0.7em;
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
    }
    svg {
      fill: $secondary-color;
      width: 2.5em;
    }
    &:hover {
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
        filter: blur(0.2em) brightness(0.7);
        transform: scale(110%);
      }
      .icons {
        transform: translateX(0);
      }
    }
  }
}
</style>
