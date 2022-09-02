<template>
  <main>
    <form submit.prevent="login">
      <h1>Iniciar Sesión</h1>
      <div class="box">
        <label for="username">Usename</label>
        <div class="input">
          <figure class="img-box">
            <img :src="require('@/assets/icons/user-fill.svg')" />
          </figure>
          <input type="text" name="username" autocomplete="off" />
        </div>
      </div>
      <div class="box">
        <label for="password">Password</label>
        <div class="input">
          <figure class="img-box">
            <img :src="require('@/assets/icons/lock-fill.svg')" />
          </figure>
          <input :type="passType" name="password" autocomplete="off" />
        </div>
      </div>
      <button @click="submit">Iniciar</button>
    </form>
    <p>Web Personal, no se permite registrar usuarios</p>
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
  height: 85vh;
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
      font-size: 2rem;
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
      .input {
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
          height: 100%;
          padding-left: 1rem;
          background-color: $secondary-color;
          border-top-right-radius: $border-radius;
          border-bottom-right-radius: $border-radius;
          &:focus {
            outline: none;
          }
        }
      }
    }
    $border-radius: 8px;
    button {
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
  }
  p {
    text-transform: capitalize;
    color: $secondary-color;
    font-size: 1.2rem;
  }
}
</style>
