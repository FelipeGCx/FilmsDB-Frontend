<template>
  <div class="menu">
    <router-link
      class="icon"
      :to="{
        name: 'All',
        params: { page: 1 },
      }"
    >
      <svg viewBox="0 0 24 24">
        <path
          d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"
        />
      </svg>
    </router-link>
    <div class="icon" @click="this.$emit('pressFilter')">
      <svg viewBox="0 0 24 24">
        <path
          d="M4.25,5.61C6.57,8.59,10,13,10,13v5c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2v-5c0,0,3.43-4.41,5.75-7.39 C20.26,4.95,19.79,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"
        />
      </svg>
    </div>
    <div class="icon" @click="this.$emit('pressSearch')">
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
    <router-link class="icon" :to="{
        name: 'Favorite',
        params: { page: 1 },
      }">
      <svg viewBox="0 0 24 24">
        <path
          d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
};
</script>

<style scoped>
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
}
</style>