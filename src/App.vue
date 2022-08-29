<template>
  <the-header />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: { TheHeader },
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
}
body {
  overflow-x: hidden;
  background-color: $base-color;
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
button {
  background-color: transparent;
  border: none;
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
