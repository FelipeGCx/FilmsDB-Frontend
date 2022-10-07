<template>
  <div class="not-found">
    <div class="image">
      <NotFoundImg />
    </div>
    <span>LA PAGINA QUE BUSCAS HA SIDO REMOVIDA O NO EXISTE</span>
    <router-link class="main-button" to="/all">IR A INICIO</router-link>
  </div>
</template>

<script>
import NotFoundImg from "@/components/NotFoundImg.vue";
export default {
  name: "NotFound",
  components: { NotFoundImg },
};
</script>

<style scoped>
@media only screen and (min-width: 764px) and (max-width: 3000px) {
  .image {
    width: 30rem;
  }
}
@media only screen and (min-width: 100px) and (max-width: 763px) {
  .image {
    width: 20rem;
  }
}
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  gap: 1rem;
  margin: 0 13vw;
}
a {
  text-decoration: none;
  text-align: center;
}
.main-button {
  font-size: 1.3rem;
}
span {
  font-size: 1rem;
  color: var(--color-clear);
  text-align: center;
  font-weight: 500;
}
</style>
