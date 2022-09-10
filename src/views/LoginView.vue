<template>
  <main>
    <form submit.prevent="login">
      <h1>Login</h1>
      <div class="box">
        <label for="username">Usename</label>
        <div class="input-box">
          <figure class="img-box">
            <img :src="require('@/assets/icons/user-fill.svg')" />
          </figure>
          <input type="text" name="username" autocomplete="off" />
        </div>
      </div>
      <div class="box">
        <label for="password">Password</label>
        <div class="input-box">
          <figure class="img-box">
            <img :src="require('@/assets/icons/lock-fill.svg')" />
          </figure>
          <input :type="passType" name="password" autocomplete="off" />
        </div>
      </div>
      <button class="main-button" @click="submit">Login</button>
    </form>
    <p>Personal Web (disable signup)</p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      passType: "text",
    };
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
    background-color: $neutral-color;
    border-radius: $border-radius;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.4rem 4.5rem;
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
        height: 3rem;
        figure {
          background-color: $primary-color;
          border-top-left-radius: $border-radius;
          border-bottom-left-radius: $border-radius;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 0.6rem;
          img {
            width: 2rem;
            height: 2rem;
            filter: contrast(1) invert(1);
          }
        }
        input {
          // height: 100%;
          padding-left: 1rem;
          background-color: $secondary-color;
          border-radius: 0;
          border: none;
          border-top-right-radius: $border-radius;
          border-bottom-right-radius: $border-radius;
          &:focus {
            outline: none;
          }
        }
      }
    }
    button {
      width: 100%;
    }
  }
  p {
    text-transform: capitalize;
    color: $secondary-color;
  }
}
</style>
