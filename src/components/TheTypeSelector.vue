<template>
  <div class="type">
    <the-button-close @btnClicked="$emit('clicked')" />
    <nav class="types | blur">
      <ul>
        <li v-for="(item, index) in types" :key="index">
          <router-link
            class="img-button"
            :to="item.to"
            @click="$emit('clicked')"
          >
            <svg
              v-html="item.svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            ></svg>
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import TheButtonClose from "@/components/TheButtonClose.vue";
export default {
  components: { TheButtonClose },
  data() {
    return {
      types: [
        {
          name: "All",
          svg: "<path d='M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,14.67V9.33 c0-0.79,0.88-1.27,1.54-0.84l4.15,2.67c0.61,0.39,0.61,1.29,0,1.68l-4.15,2.67C10.38,15.94,9.5,15.46,9.5,14.67z'/>",
          to: {
            name: "Home",
          },
        },
        {
          name: "Movie",
          svg: "<path d='M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z'/>",
          to: {
            name: "Home",
            query: {
              type: "movie",
              year: new Date().getFullYear(),
              note: "none",
              page: 1,
            },
          },
        },
        {
          name: "Serie",
          svg: "<path d='M18 4l1.82 3.64c.08.16-.04.36-.22.36h-1.98c-.38 0-.73-.21-.89-.55L15 4h-2l1.82 3.64c.08.16-.04.36-.22.36h-1.98c-.38 0-.73-.21-.89-.55L10 4H8l1.82 3.64c.08.16-.04.36-.22.36H7.62c-.38 0-.73-.21-.9-.55L5 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-.55-.45-1-1-1h-3z'/>",
          to: {
            name: "Home",
            query: {
              type: "serie",
              year: new Date().getFullYear(),
              note: "none",
              page: 1,
            },
          },
        },
        {
          name: "Anime",
          svg: "<path d='M22,2.84L22,2.84c0-0.45-0.39-0.79-0.83-0.75L4.89,3.9C4.38,3.95,4,4.38,4,4.89V12H3.08c-0.6,0-1.08,0.53-1,1.13 C2.52,16.33,4.83,19,8,20.25V21c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-0.75c3.17-1.25,5.48-3.92,5.92-7.12 c0.08-0.6-0.4-1.13-1-1.13H10.5V8h10.75C21.66,8,22,7.66,22,7.25v0c0-0.41-0.34-0.75-0.75-0.75H10.5V4.78l10.83-1.19 C21.71,3.54,22,3.22,22,2.84z M6.5,5.22V6.5h-1V5.34L6.5,5.22z M5.5,8h1v4h-1V8z M9,12H8V8h1V12z M9,6.5H8V5.06l1-0.11V6.5z'/>",
          to: {
            name: "Home",
            query: {
              type: "anime",
              year: new Date().getFullYear(),
              note: "none",
              page: 1,
            },
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.type {
  position: fixed;
  width: 100%;
  top: 5.4rem;
  left: 0;
  bottom: 9.4rem;
  .types {
    z-index: 3;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;
    align-items: center;
    &::-webkit-scrollbar {
      width: 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
