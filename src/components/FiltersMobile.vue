<template>
  <div>
    <div class="filters-mobile">
      <button class="btn1" :style="position">Año</button>
      <button class="btn2" :style="position">Nota</button>
      <button class="btn3" :style="position">Type</button>
      <button class="btn4" :style="position">Sagas</button>
      <button class="btn5" :style="position">Categorias</button>
    </div>
    <!-- <div>
          <button>x</button>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "FilterMobile",
  data() {
    return {
        position:"transform: translateX(-16rem)"
    };
  },
  beforeUpdate() {
      
  },
  mounted() {
      setTimeout(() => {
          this.position = "transform: translateX(0rem)"
      }, 4000);
  },
};
</script>

<style scoped>
.filters-mobile {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
button {
  border: none;
  padding: 0.7rem 1rem;
  background-color: var(--bg-loading);
  border-radius: 5rem;
  color: var(--color-clear);
  text-align: start;
  width: fit-content;
  cursor: pointer;
  transition: all 5s ease;
}
.btn1 {
  animation: animBtn 1s linear;
  animation-delay: 0s;
}
.btn2 {
  animation: animBtn 1s linear;
  animation-delay: .2s;
}
.btn3 {
  animation: animBtn 1s linear;
  animation-delay: .4s;
}
.btn4 {
  animation: animBtn 1s linear;
  animation-delay: .6s;
}
.btn5 {
  animation: animBtn 1s linear;
  animation-delay: .8s;
}
@keyframes animBtn {
    0%{
        transform: translateX(-8rem);
    }
    50%{
        transform: translateX(.5rem);
    }
    75%{
        transform: translateX(-.5rem);
    }
    100%{
        transform: translateX(0rem);
    }
}

</style>