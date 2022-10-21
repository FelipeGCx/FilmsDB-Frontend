<template>
  <main>
    <form @submit.prevent="login">
      <h1>Login</h1>
      <div class="box">
        <label for="username">Usename</label>
        <div class="input-box">
          <figure class="img-box">
            <img :src="require('@/assets/icons/user-fill.svg')" />
          </figure>
          <input
            type="text"
            name="username"
            autocomplete="off"
            v-model="user.username"
          />
        </div>
      </div>
      <div class="box">
        <label for="password">Password</label>
        <div class="input-box">
          <figure class="img-box">
            <img :src="require('@/assets/icons/lock-fill.svg')" />
          </figure>
          <input
            :type="passType"
            name="password"
            autocomplete="off"
            v-model="user.password"
          />
          <img class="pass-eye" :src="passImg" @click="passVisibility" />
        </div>
      </div>
      <button class="main-button" @click="submit">Login</button>
    </form>
    <p>Personal Web (disable signup)</p>
  </main>
</template>

<script>
import auth from "@/mixins/mutations/auth";

export default {
  mixins: [auth],
  data() {
    return {
      passType: "password",
      passImg: require("@/assets/icons/eye-show.svg"),
      passState: false,
      user: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    passVisibility() {
      if (this.passState) {
        this.passType = "password";
        this.passImg = require("@/assets/icons/eye-show.svg");
        this.passState = false;
      } else {
        this.passType = "text";
        this.passImg = require("@/assets/icons/eye-hide.svg");
        this.passState = true;
      }
    },
    login() {
      this.authenticate(this.user);
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: 70vh;
  // height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  form {
    background-color: $base-color;
    border-radius: $border-radius;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3.4rem 4.5rem;
    border: 0.3rem solid $neutral-color;
    h1 {
      text-transform: uppercase;
      align-self: center;
    }
    .box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.7rem;
      label {
        font-size: 1.2rem;
        color: $secondary-color;
      }
      $border-radius: 8px;
      .input-box {
        display: flex;
        border: 0.3rem solid $primary-color;
        border-radius: $border-radius;
        overflow: hidden;
        min-width: 25rem;
        position: relative;
        figure {
          background-color: $base-color;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0.6rem;
          img {
            width: 2rem;
            height: 2rem;
            filter: contrast(1) invert(0.5);
          }
        }
        input {
          // height: 100%;
          padding-left: 1rem;
          background-color: $base-color;
          color: $secondary-color;
          border-radius: 0;
          padding: 0.7rem 0;
          border: none;
          &:focus {
            outline: none;
          }
        }
        .pass-eye {
          width: 2rem;
          height: 2rem;
          filter: contrast(1) invert(0.5);
          position: absolute;
          right: 1rem;
          top: 15%;
        }
      }
    }
    button {
      margin-top: 0.5rem;
      width: 100% !important;
    }
  }
  p {
    text-transform: capitalize;
    color: $secondary-color;
  }
}
</style>
