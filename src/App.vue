<template>
  <the-header />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :class="route" :is="Component" />
    </transition>
  </router-view>
  <the-footer />
  <the-menu-mobile />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheMenuMobile from "@/components/TheMenuMobile.vue";
import vtoken from "./mixins/mutations/vtoken";

export default {
  components: { TheHeader, TheFooter, TheMenuMobile },
  mixins: [vtoken],
  created() {
    this.$isAdmin = false;
    if (localStorage.getItem("tokenAccess")) {
      // here need verify the token
      // let response = await ...;
      let response = this.verifyToken(localStorage.getItem("tokenAccess"));
      console.log(response);
    }
  },
};
</script>

<style lang="scss">
body {
  background-color: $base-color;
}
#app {
  width: 100vw;
}
h1,
h2,
h3,
p,
span,
a {
  color: $secondary-color;
}
</style>
