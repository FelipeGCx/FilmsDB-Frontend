<template>
  <the-header :isAdmin="isAdmin" :isLogin="isLogin" @logout="logout" />
  <router-view
    v-slot="{ Component, route }"
    @login="login"
    :isAdmin="isAdmin"
    @createdContent="createdContent"
    @updatedContent="updatedContent"
    @createdSaga="createdSaga"
    @createdCategory="createdCategory"
    @error="error"
    @refecthDone="refetch = false"
    :needRefetch="refetch"
  >
    <transition name="fade" mode="out-in">
      <component :class="route" :is="Component" />
    </transition>
  </router-view>
  <teleport to="body">
    <the-pop-slider
      v-show="isPopSlider"
      :title="popTitle"
      :mod="popMode"
      :isVisible="popSlider"
      @showed="hidePopSlider"
    />
  </teleport>
  <the-footer />
  <the-menu-mobile :isAdmin="isAdmin" />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import ThePopSlider from "@/components/ThePopSlider.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheMenuMobile from "@/components/TheMenuMobile.vue";
import vtoken from "./mixins/mutations/vtoken";

export default {
  components: { TheHeader, ThePopSlider, TheFooter, TheMenuMobile },
  data() {
    return {
      isAdmin: false,
      isLogin: false,
      isPopSlider: false,
      popTitle: "error",
      popMode: "error",
      popSlider: false,
      refetch: false,
    };
  },
  mixins: [vtoken],
  methods: {
    login(data) {
      this.isAdmin = data.isAdmin;
      this.isLogin = data.isLogin;
      this.showPopSlider("Login Success!", "info");
    },
    logout() {
      localStorage.removeItem("tokenAccess");
      this.isAdmin = false;
      this.isLogin = false;
      this.$router.push({ name: "Home" });
    },
    createdContent() {
      this.showPopSlider("Filme Created!", "success");
      console.log("se creo y refecth");
      this.refetch = true;
    },
    updatedContent() {
      this.showPopSlider("Filme Updated!", "success");
      this.refetch = true;
    },
    createdSaga() {
      this.showPopSlider("Saga Created!", "success");
    },
    createdCategory() {
      this.showPopSlider("Category Created!", "success");
    },
    error() {
      this.showPopSlider("Something Fail!", "error");
    },
    showPopSlider(title, mod) {
      this.isPopSlider = true;
      this.popTitle = title;
      this.popMode = mod;
      setTimeout(() => {
        this.popSlider = true;
      }, 800);
    },
    hidePopSlider() {
      this.popSlider = false;
      setTimeout(() => {
        this.isPopSlider = false;
      }, 2000);
    },
  },
  created() {
    if (localStorage.getItem("tokenAccess")) {
      this.verifyToken(localStorage.getItem("tokenAccess"));
    } else {
      this.isAdmin = false;
      this.isLogin = false;
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
