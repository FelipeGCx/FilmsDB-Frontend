<template>
  <!-- header with filters for pc -->
  <Filters v-show="menuPc" />
  <!-- the main content of the page -->
  <main>
    <router-view />
  </main>
  <!-- menu mobile  -->
  <MenuV2 :visible="menuMobile" />
  <!-- footer  -->
  <Footer />
</template>

<script>
// import the components required
import Filters from "@/components/Filters.vue";
import MenuV2 from "@/components/MenuV2.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Filters,
    MenuV2,
    Footer,
  },
  data() {
    return {
      menuMobile: false,
      menuPc: false,
    };
  },
  methods: {
    // determine if the device is mobile or pc in base data
    isMobile() {
      this.menuMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      this.menuPc = !this.menuMobile;
    },
    // determine if the device is mobile or pc in the width of the screen
    menuVisibiliisty(e) {
      this.menuMobile = e.target.innerWidth < 760 ? true : false;
      this.menuPc = !this.menuMobile;
    },
  },
  created() {
    // call the method to determine if the device is mobile or pc
    this.isMobile();
    // add event listener to the window to determine if the device is mobile or pc
    window.addEventListener("resize", this.menuVisibility);
  },
  destroyed() {
    // remove event listener to the window to determine if the device is mobile or pc
    window.removeEventListener("resize", this.menuVisibility);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;700;800&display=swap");
/* @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap'); */

:root {
  font: 11pt "Mukta", "Montserrat Medium";
  --bg-body: #030118;
  --bg-header: #130f34;
  --bg-header-two: var(--color-main);
  --bg-main-button: pink;
  --color-clear: white;
  --color-dark: black;
  --color-main: #00bcd4;
  --border-anime: #00bcd4;
  --border-serie: #673ab7;
  --border-movie: #e91e63;
  --bg-loading: var(--border-movie);
  --bg-tooltip: grey;
  --bg-btn-header: #2b2f46;
  --fill-icon: white;
  --radius: 9px;
  --bg-scrollbar: var(--color-main);
  --bg-main-button: var(--color-main);
  --bg-hover-main-button: var(--border-serie);
}

@media only screen and (min-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 750px) and (max-width: 1024px) {
  h1 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 750px) {
  h1 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 550px) {
  h1 {
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
.h1-titles {
  margin-top: 1rem;
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
  padding: 0.7rem 1.3rem;
  border-radius: 0.5rem;
  color: var(--color-clear);
  transition: all 0.3s ease;
  font-weight: 500;
  border: 0.2rem solid transparent;
}

@media only screen and (min-width: 764px) and (max-width: 3000px) {
  .note::-webkit-slider-thumb,
  .note-number,
  .selector,
  .active,
  .main-button,
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-main) !important;
  }
  .img-load {
    fill: var(--color-main);
  }
}
@media only screen and (min-width: 100px) and (max-width: 763px) {
  .note::-webkit-slider-thumb,
  .note-number,
  .selector,
  .active,
  .main-button,
  ::-webkit-scrollbar-thumb {
    background-color: var(--bg-loading) !important;
  }
  .img-load {
    fill: var(--bg-loading);
  }
}
.main-button:hover {
  opacity: 85%;
  /* transform: scale(1.1); */
}

.sub-button {
  cursor: pointer;
  background-color: transparent;
  padding: 0.7rem 1.3rem;
  border-radius: 0.5rem;
  color: var(--color-clear);
  transition: all 0.3s ease;
  font-weight: 500;
  border: 0.2rem solid var(--color-clear);
  opacity: 75%;
  text-decoration: none !important;
  text-decoration-line: none !important;
}

.sub-button:hover {
  opacity: 100%;
  /* transform: scale(1.1); */
}
</style>
