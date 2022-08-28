<template>
  <div class="films">
    <div
      class="film"
      v-for="(item, idx) in FilmsDetail"
      :key="idx"
      :class="item.type"
    >
      <div class="information">
        <div class="data">
          <a
            v-if="item.link != ' '"
            class="a-normal"
            :href="item.link"
            target="blank"
            >{{ item.titleOG }}</a
          >
          <span v-else>{{ item.titleOG }}</span>
          <span>{{ item.title }}</span>
        </div>
        <div class="more">
          <div
            class="season | tooltip"
            :class="item.type"
            :style="{ opacity: item.season == 0 ? 0 : 100 }"
          >
            {{ item.season }}
            <span class="tooltiptext | tooltip-season">Season</span>
          </div>
          <div class="rigth-icons">
            <router-link
              class="tooltip | svg-icon"
              :class="item.type"
              v-show="item.category.svg != ' '"
              :to="{
                name: 'Category',
                params: {
                  title: `Categoria: ${item.category.category}`,
                  id: item.category.category.toLocaleLowerCase(),
                },
                query: { page: 1 },
              }"
            >
              <svg
                v-html="item.category.svg"
                viewBox="0 0 24 24"
                data-v-fae5bece=""
              ></svg>
              <span class="tooltiptext | tooltip-category | left-two"
                >Categoria</span
              >
            </router-link>
            <span class="year | tooltip" :class="item.type"
              >{{ item.year }}

              <span class="tooltiptext | tooltip-year | left">Año</span>
            </span>
            <router-link
              class="tooltip | svg-icon"
              :class="item.type"
              v-show="item.saga.svg != ' '"
              :to="{
                name: 'Saga',
                params: {
                  title: `Categoria: ${item.saga.saga}`,
                  id: item.saga.saga.toLocaleLowerCase(),
                },
                query: { page: 1 },
              }"
            >
              <svg
                v-html="item.saga.svg"
                viewBox="0 0 24 24"
                data-v-fae5bece=""
              ></svg>
              <span class="tooltiptext | tooltip-saga" :class="item.type"
                >Saga</span
              >
            </router-link>

            <div class="tooltip" :class="item.type" v-show="item.language">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12.65 15.67c.14-.36.05-.77-.23-1.05l-2.09-2.06.03-.03c1.74-1.94 2.98-4.17 3.71-6.53h1.94c.54 0 .99-.45.99-.99v-.02c0-.54-.45-.99-.99-.99H10V3c0-.55-.45-1-1-1s-1 .45-1 1v1H1.99c-.54 0-.99.45-.99.99 0 .55.45.99.99.99h10.18C11.5 7.92 10.44 9.75 9 11.35c-.81-.89-1.49-1.86-2.06-2.88-.16-.29-.45-.47-.78-.47-.69 0-1.13.75-.79 1.35.63 1.13 1.4 2.21 2.3 3.21L3.3 16.87c-.4.39-.4 1.03 0 1.42.39.39 1.02.39 1.42 0L9 14l2.02 2.02c.51.51 1.38.32 1.63-.35zM17.5 10c-.6 0-1.14.37-1.35.94l-3.67 9.8c-.24.61.22 1.26.87 1.26.39 0 .74-.24.88-.61l.89-2.39h4.75l.9 2.39c.14.36.49.61.88.61.65 0 1.11-.65.88-1.26l-3.67-9.8c-.22-.57-.76-.94-1.36-.94zm-1.62 7l1.62-4.33L19.12 17h-3.24z"
                />
              </svg>
              <span class="tooltiptext | tooltip-language | left"
                >Idioma Original</span
              >
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
        <div class="tooltip" :class="item.type">
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
          <span class="tooltiptext | tooltip-edit">Editar</span>
        </div>
        <div class="tooltip" :class="item.type">
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
          <span class="tooltiptext | tooltip-favorite">Favorito</span>
        </div>
        <span class="note | tooltip" :class="item.type"
          >{{ normalizeNote(item.note) }}
          <span class="tooltiptext | tooltip-note">Nota</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "FilmsView",
  props: {
    FilmsDetail: {
      type: Object,
      require: true,
      default: "",
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
  apollo: {
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
      result() {
        this.categoriesStatus = true;
      },
    },
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
      result() {
        this.sagasStatus = true;
      },
    },
  },
  methods: {
    // transform the note to a string for visualize it best
    normalizeNote(note) {
      if (note % 1 == 0 && note != 10) {
        return `${note}.0`;
      }
      return note;
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

<style scoped>
@media only screen and (min-width: 1024px) {
  .poster,
  .film,
  .films,
  .information,
  .season,
  .rigth-icons,
  .icons,
  .note,
  .year,
  .a-normal,
  .svg-icon,
  .tooltiptext,
  svg,
  span {
    font-size: 1rem;
  }
}
@media only screen and (min-width: 750px) and (max-width: 1024px) {
  .poster,
  .film,
  .films,
  .information,
  .season,
  .rigth-icons,
  .icons,
  .note,
  .year,
  .a-normal,
  .svg-icon,
  .tooltiptext,
  svg,
  span {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 750px) {
  .poster,
  .film,
  .films,
  .information,
  .season,
  .rigth-icons,
  .icons,
  .note,
  .year,
  .a-normal,
  .svg-icon,
  .tooltiptext,
  svg,
  span {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 550px) {
  .poster,
  .film,
  .films,
  .information,
  .season,
  .rigth-icons,
  .icons,
  .note,
  .year,
  .a-normal,
  .svg-icon,
  .tooltiptext,
  svg,
  span {
    /* font-size: .6rem; */
    font-size: 1rem;
  }
}
.films {
  gap: 1.2em;
  margin: 0 3vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* min-height: 70vh; */
}
span {
  font-size: 1.1em;
}
.poster {
  height: 26em;
  width: 17em;
}
.film {
  height: 26em;
  width: 17em;
}
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
}
.Anime.film:hover {
  filter: drop-shadow(0 0 1rem var(--border-anime));
}
.Movie.film:hover {
  filter: drop-shadow(0 0 1rem var(--border-movie));
}
.Serie.film:hover {
  filter: drop-shadow(0 0 1rem var(--border-serie));
}
.film:hover > .information {
  transform: translate3d(0, 1rem, 0);
}
.film:hover > .information .more .season {
  transform: translate3d(0em, 0, 0);
}
.film:hover > .information .more .rigth-icons {
  transform: translate3d(0em, 0, 0);
}
.film:hover > .icons {
  transform: translate3d(0, 22.5em, 0);
}
.film:hover > .poster {
  filter: blur(0.2em) brightness(0.7);
  transform: scale(110%);
}
.information {
  align-items: flex-start;
  color: var(--color-clear);
  display: flex;
  flex-direction: column;
  grid-gap: 0.7em;
  position: absolute;
  transform: translate3d(0, -17rem, 0);
  transition: all 0.5s ease;
  z-index: 1;
  min-width: 14em;
  max-width: 14em;
}
.data {
  display: flex;
  flex-direction: column;
}
.more {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.season {
  height: 100%;
  transform: translate3d(-5em, 0, 0);
  transition: all 0.3s linear;
  transition-delay: 0.2s;
}
.rigth-icons {
  display: flex;
  flex-direction: column;
  grid-gap: 0.7em;
  align-items: flex-end;
  transform: translate3d(6em, 0, 0);
  transition: all 0.3s linear;
  transition-delay: 0.2s;
}
.poster {
  transition: all 0.5s ease-out;
}
.film.Anime:hover {
  background-color: var(--border-anime);
  border-color: var(--border-anime);
}
.film.Serie:hover {
  background-color: var(--border-serie);
  border-color: var(--border-serie);
}
.film.Movie:hover {
  background-color: var(--border-movie);
  border-color: var(--border-movie);
}
svg {
  fill: var(--color-clear);
  width: 2.5em;
}
.icons {
  position: absolute;
  display: flex;
  width: 14em;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  transform: translate3d(-22em, 22.5em, 0);
  transition: all 0.5s ease;
  z-index: 3;
}
.note {
  margin: 0.2em;
  min-width: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.year,
.note,
.season {
  font-weight: 600;
  padding: 0.1em 0.4em;
  background-color: var(--color-clear);
  color: var(--color-dark);
  border-radius: var(--radius);
}
.edit:hover {
  filter: drop-shadow(0 0 1rem var(--bc-book));
}
.tooltip {
  position: relative;
}
.Anime > .tooltiptext {
  --bg-tooltip: var(--border-anime);
}
.Serie > .tooltiptext {
  --bg-tooltip: var(--border-serie);
}
.Movie > .tooltiptext {
  --bg-tooltip: var(--border-movie);
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltiptext {
  visibility: hidden;
  background-color: var(--bg-tooltip);
  color: var(--color-clear);
  text-align: center;
  border-radius: var(--radius);
  padding: 0.1em 0.7em;
  position: absolute;
  white-space: nowrap;
  z-index: 1;
  font-weight: 400;
}
.tooltiptext::after {
  content: "";
  position: absolute;
  border-width: 0.4em;
  border-style: solid;
}
.tooltip-season {
  left: 158%;
  top: -7%;
}
.tooltip-category {
  left: -262%;
  top: 8%;
}
.tooltip-year {
  left: -163%;
  top: 0%;
}
.tooltip-saga {
  left: -181%;
  top: 10%;
}
.tooltip-language {
  left: -374%;
  top: 9%;
}
.tooltip-note {
  left: -34%;
  top: -157%;
}
.tooltip-favorite {
  left: -56%;
  top: -100%;
}
.tooltip-edit {
  left: -7%;
  top: -100%;
}
.tooltip-season::after {
  top: 28%;
  right: 100%;
  border-color: #0000 var(--bg-tooltip) #0000 #0000;
}
.tooltip-category::after {
  top: 28%;
  right: -14%;
  border-color: #0000 #0000 #0000 var(--bg-tooltip);
}
.tooltip-year::after {
  top: 28%;
  right: -23%;
  border-color: #0000 #0000 #0000 var(--bg-tooltip);
}
.tooltip-saga::after {
  top: 28%;
  right: -22%;
  border-color: #0000 #0000 #0000 var(--bg-tooltip);
}
.tooltip-language::after {
  top: 28%;
  right: -9%;
  border-color: #0000 #0000 #0000 var(--bg-tooltip);
}
.tooltip-note::after {
  top: 99%;
  right: 39%;
  border-color: var(--bg-tooltip) #0000 #0000 #0000;
}
.tooltip-favorite::after {
  top: 99%;
  right: 39%;
  border-color: var(--bg-tooltip) #0000 #0000 #0000;
}
.tooltip-edit::after {
  top: 99%;
  right: 39%;
  border-color: var(--bg-tooltip) #0000 #0000 #0000;
}
.svg-icon {
  height: 2.5em;
}
.a-normal {
  color: inherit;
  text-decoration: inherit;
  font-size: 1.1em;
}
</style>
