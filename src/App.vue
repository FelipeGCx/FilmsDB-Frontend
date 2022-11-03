<template>
  <the-header :isAdmin="isAdmin" :isLogin="$isLogin" />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <component :class="route" :is="Component" />
    </transition>
  </router-view>
  <the-footer />
  <the-menu-mobile :isAdmin="isAdmin" />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheMenuMobile from "@/components/TheMenuMobile.vue";
import vtoken from "./mixins/mutations/vtoken";

export default {
  components: { TheHeader, TheFooter, TheMenuMobile },
  data() {
    return {
      isAdmin: false,
    };
  },
  mixins: [vtoken],
  mounted() {
    if (localStorage.getItem("tokenAccess")) {
      this.verifyToken(localStorage.getItem("tokenAccess"));
    } else {
      this.isAdmin = false;
      this.$isLogin = false;
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
