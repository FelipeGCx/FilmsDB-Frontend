<template>
  <div class="film" :key="payload.id" :class="payload.type">
    <div class="information">
      <div class="main-data">
        <a
          v-if="isVoid(payload.link)"
          class="a-normal"
          :href="payload.link"
          target="blank"
          tabindex="-1"
          >{{ payload.titleOG }}</a
        >
        <p v-else>{{ payload.titleOG }}</p>
        <p v-show="payload.titleOG != payload.title">{{ payload.title }}</p>
      </div>
      <div class="more-data">
        <div class="season" data-tooltip="season" data-flow="right">
          <span :data-opacity="seasonOpacity(payload.season)">{{
            payload.season
          }}</span>
        </div>
        <div class="rigth-icons">
          <!-- 
            :to="goToCategory(payload.category)" -->
          <!-- <a
            v-show="$plugins.isEmpty(payload.category?.svg)"
            class="category"
            data-tooltip="category"
            data-flow="left"
            tabindex="-1"
            :alt="`go to category ${payload.category}`"
          >
            <svg
              v-if="payload.category"
              v-html="payload.category.svg"
              viewBox="0 0 24 24"
            ></svg>
          </a> -->
          <span class="year" data-tooltip="year" data-flow="left"
            >{{ payload.year }}
          </span>
          <!-- 
            :to="goToSaga(payload.saga)" -->
          <!-- <a
            v-show="$plugins.isEmpty(payload.saga?.svg)"
            class="saga"
            data-tooltip="saga"
            data-flow="left"
            tabindex="-1"
            :alt="`go to saga ${payload.saga}`"
          >
            <svg
              v-if="payload.saga"
              v-html="payload.saga.svg"
              viewBox="0 0 24 24"
            ></svg>
          </a> -->

          <div
            v-show="payload.language"
            data-tooltip="original"
            data-flow="left"
            class="language"
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
    <img :src="payload.poster" class="poster" loading="lazy"
    oncontextmenu="return false" oncopy="return false" oncut="return false"
    draggable="false" type=”image/webp” :alt="payload.title"
    onerror="this.onerror=null;
    this.src='https://firebasestorage.googleapis.com/v0/b/films-a2d18.appspot.com/o/assets%2FNot%20Found%20Image.webp?alt=media&token=8bfcfa56-b828-4db9-9c74-82e34324f673'"
    />
    <div class="icons">
      <a
        class="edit"
        href=""
        v-show="isAdmin"
        :tabindex="isAdmin ? 0 : -1"
        data-tooltip="edit"
        data-flow="top"
      >
        <Pen />
      </a>
      <!-- <router-link
        :to="goToEdit(payload)"
        data-tooltip="edit"
        data-flow="top"
        :tabindex="isAdmin ? 0 : -1"
        v-show="isAdmin"
      >
        <img :src="imgEdit" alt="edit" />
      </router-link> -->
      <button
        class="favorite"
        :class="isAdmin ? 'admin' : 'user'"
        data-tooltip="favorite"
        data-flow="top"
        @click="isAdmin ? handlerFavorite(payload) : false"
      >
        <Heart v-if="payload.favorite" />
        <HeartOutline v-else />
      </button>
      <span class="note" data-tooltip="note" data-flow="top">
        {{ $plugins.normalizeNote(payload.note || 0) }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Film } from "@/types";
import { Heart, HeartOutline, Pen } from "@/assets/icons";

interface Props {
  payload: Partial<Film>;
  isAdmin: boolean;
}
defineProps<Props>();

const isVoid = (value: string) => {
  return value != " ";
};

const seasonOpacity = (season: string) => {
  return season ? 100 : 0;
};

// change the router to update view
const update = (item: Film) => {
  //   this.$router.push({
  //     name: "Update",
  //     params: { title: item.title },
  //     query: { s: item.season },
  //   });
};
const goToCategory = (item: Film) => {
  return {
    name: "Category",
    query: {
      category: item.category,
      page: 1,
    },
  };
};
const goToSaga = (item: Film) => {
  return {
    name: "Saga",
    query: {
      saga: item.saga,
      page: 1,
    },
  };
};
const goToEdit = (item: Film) => {
  return {
    name: "UpdateContent",
    query: {
      title: item.titleOG,
      s: item.season,
    },
  };
};
const handlerFavorite = (item: Partial<Film>) => {
  const id = item.id;
  const filme = {
    favorite: !item.favorite,
  };
};
</script>

<style lang="scss">
.film {
  font-size: 1.4rem;
  border: 0.2em solid transparent;
  border-radius: 1em;
  position: relative;
  overflow: hidden !important;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  text-overflow: ellipsis !important;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  user-select: none;
  width: 100%;

  &.Anime {
    @include tooltip($anime-color);

    &:hover,
    &:focus {
      filter: drop-shadow(0 0 1em $anime-color);
      border-color: $anime-color;
    }
  }

  &.Movie {
    @include tooltip($movie-color);

    &:hover,
    &:focus {
      filter: drop-shadow(0 0 1em $movie-color);
      border-color: $movie-color;
    }
  }

  &.Serie {
    @include tooltip($serie-color);

    &:hover,
    &:focus {
      filter: drop-shadow(0 0 1em $serie-color);
      border-color: $serie-color;
    }
  }

  &.Game {
    @include tooltip($game-color);

    &:hover,
    &:focus {
      filter: drop-shadow(0 0 1em $game-color);
      border-color: $game-color;
    }
  }

  &.Book {
    @include tooltip($book-color);

    &:hover,
    &:focus {
      filter: drop-shadow(0 0 1em $book-color);
      border-color: $book-color;
    }
  }

  .information {
    align-items: flex-start;
    color: $color-light;
    display: flex;
    flex-direction: column;
    grid-gap: 0.7em;
    position: absolute;
    transform: translate3d(0, -100%, 0);
    transition: all 0.5s ease;
    z-index: 1;
    width: 100%;
    padding: 1em;

    p {
      font-weight: 500;
    }

    .main-data {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      padding-bottom: 1em;
      font-size: 1.2em;

      .a-normal {
        color: inherit;
        text-decoration: inherit;
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
        span {
          padding: 0.4em 0.8em;
          background-color: $color-light;
          border-radius: 5em;
          font-weight: 600;
          color: $color-dark;
          &[data-opacity="0"] {
            opacity: 0;
          }
          &[data-opacity="100"] {
            opacity: 1;
          }
        }
      }

      .rigth-icons {
        display: flex;
        flex-direction: column;
        grid-gap: 0.7em;
        align-items: flex-end;
        transform: translate3d(100%, -77%, 0);
        transition: all 0.3s linear;
        transition-delay: 0.2s;
        .category,
        .saga {
          cursor: pointer;
        }
        .year {
          padding: 0.4em 0.8em;
          background-color: $color-light;
          border-radius: 5em;
          font-weight: 600;
          color: $color-dark;
        }
      }
    }
  }

  .poster {
    transition: all 0.5s ease-out;
    width: 100%;
  }

  .icons {
    position: absolute;
    display: flex;
    width: 100%;
    padding: 0 2em;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transform: translateX(-100%);
    bottom: 1em;
    // transform: translate3d(-22em, 0, 0);
    transition: all 0.5s ease;
    z-index: 3;

    .edit {
      &:hover {
        transform: scale(1.2);
        transition: all 0.2s ease;
      }
      & > * {
        width: 2.5em;
        color: $color-light;
      }
    }

    .favorite {
      border: none;
      background-color: transparent;
      font-size: inherit;
      &.admin:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: all 0.2s ease;
      }
      & > * {
        width: 2.5em;
        color: $color-light;
      }
    }

    .note {
      padding: 0.5em;
      background-color: $color-light;
      border-radius: 5em;
      font-weight: 500;
    }
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
      filter: blur(0.2em) brightness(0.7);
      transform: scale(110%);
    }

    .icons {
      transform: translateX(0);
    }
  }
}
</style>
