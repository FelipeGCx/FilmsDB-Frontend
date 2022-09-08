<template>
  <the-header />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
  <the-footer />
  <the-menu-mobile />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheMenuMobile from "@/components/TheMenuMobile.vue";

export default {
  components: { TheHeader, TheFooter, TheMenuMobile },
  // created() {
  //   this.$isAdmin = false;
  // },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500;1,600;1,700&display=swap");

:root {
  font-family: "Montserrat", sans-serif;
  font-size: 10px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body {
  overflow-x: hidden;
  background-color: $base-color;
  width: 100vw;
}
#app {
  width: 100vw;
}
ul {
  list-style-type: none;
}
h1 {
  font-size: 2.2rem;
  color: $secondary-color;
}
a {
  text-decoration: none;
}
svg {
  width: 3rem;
  height: 3rem;
  color: $secondary-color;
}
button,
input {
  background-color: transparent;
  border: none;
}
.blur {
  backdrop-filter: blur(7px);
}

$border-radius: 8px;
.main-button {
  padding: 0.7rem 2.6rem;
  background-color: $primary-color;
  color: $secondary-color;
  border-radius: $border-radius;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  width: fit-content;
  align-self: center;
  border: solid 0.2rem transparent;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    border-color: $primary-color;
    background-color: $secondary-color;
    color: $primary-color;
  }
}

::-webkit-scrollbar {
  height: 1rem;
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background-color: $neutral-color;
}

::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  background-color: $neutral-second-color;
  border-radius: $border-radius;
}
</style>
