<template>
  <!-- <Filters v-show="filter" /> -->
  <HeaderMobile/>
  <main>
    <router-view />
  </main>
  <!-- <router-link
    to="/create"
    class="circle | create"
  >
    <svg viewBox="0 0 24 24">
      <path
        d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
      />
    </svg>
  </router-link> -->
  <!-- <div class="circle | top">
    <svg viewBox="0 0 24 24">
      <path
        d="M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z"
      />
    </svg>
  </div> -->
  <Footer />
  <MenuV2 class="menu"/>
</template>

<script>
import Filters from "@/components/Filters.vue";
import Footer from "./components/Footer.vue";
import HeaderMobile from "./components/HeaderMobile.vue";
import MenuV2 from "./components/MenuV2.vue";

export default {
  name: "App",
  components: {
    Filters,
    Footer,
    MenuV2,
    HeaderMobile,
  },
  data() {
    return {
      filter: true,
    };
  },
  methods:{
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400&display=swap");
:root {
  font: 11pt "Mukta", "Montserrat Medium";
  --bg-body: #030118;
  --bg-header: #130f34;
  --bg-main-button: pink;
  --color-clear: white;
  --color-dark: black;
  --border-anime: #00bcd4;
  --border-serie: #673ab7;
  --border-movie: #e91e63;
  --bg-loading: var(--border-movie);
  --bg-tooltip: grey;
  --radius: 9px;
  --bg-scrollbar: var(--border-movie);
  --bg-main-button: var(--bg-loading);
  --bg-hover-main-button: var(--border-serie);
}
@media only screen and (min-width: 1024px) {
  h1{
  font-size: 2.5rem;
  }
}
@media only screen and (min-width: 750px) and (max-width: 1024px) {
  h1{
    font-size: 2rem;
  }
}
@media only screen and (max-width: 750px) {
  h1{
    font-size: 2rem;
  }
}
@media only screen and (max-width: 550px) {
  h1{
    font-size: 2rem;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
  background-color: var(--bg-body);
}
main {
  min-height: 73.5vh;
  /* min-height: 44.5rem; */
  /* min-height: 39.5vw; */
  /* margin: 4vh 5vh; */
}
h1 {
  color: var(--color-clear);
  text-align: center;
  width: 100%;
  padding-bottom: 0.5rem;
  font-weight: 500;
}
::-webkit-scrollbar {
  height: 1rem;
  width: 1rem;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  background-color: var(--bg-scrollbar);
  border: 0.1rem solid transparent;
  border-radius: 1rem;
}
.circle {
  position: fixed;
  background-color: var(--bg-loading);
  border-radius: 50%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 2px 19px var(--bg-body);
}
.circle svg {
  fill: var(--color-clear);
  width: 2.5rem;
  transform: all 1s ease;
}
.top {
  top: 87vh;
  left: 5vw;
}
.create {
  top: 86vh;
  right: 5vw;
}
.create:hover {
  background-color: var(--color-clear);
  top: 85.5vh;
  right: 4.7vw;
}
.create:hover > svg {
  fill: var(--bg-loading);
  width: 3rem;
}

.main-button {
  cursor: pointer;
  background-color: var(--bg-main-button);
  padding: 0.7rem 1.3rem;
  border-radius: 0.5rem;
  color: var(--color-clear);
  transition: all 0.3s ease;
  font-weight: 500;
  border: 0.2rem solid transparent;
}
.main-button:hover {
  opacity: 85%;
  /* transform: scale(1.1); */
}
.sub-button {
  cursor: pointer;
  background-color: transparent;
  /* background-color: var(--color-clear); */
  padding: 0.7rem 1.3rem;
  border-radius: 0.5rem;
  color: var(--color-clear);
  /* color: var(--bg-main-button); */
  transition: all 0.3s ease;
  font-weight: 500;
  border: 0.2rem solid var(--color-clear);
  /* border: 0.2rem solid var(--bg-main-button); */
  opacity: 75%;
  text-decoration: none !important;
  text-decoration-line: none !important;
}
.sub-button:hover {
  opacity: 100%;
  /* transform: scale(1.1); */
}
</style>
