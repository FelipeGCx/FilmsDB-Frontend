<template>
  <div>
    <img
      :src="require('@/assets/icons/filmsdb.svg')"
      alt="FilmsDB Logo"
      draggable="false"
    />
    <h1>Loading...</h1>
  </div>
</template>

<style lang="scss" scoped>
div {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    filter: invert(1);
    width: 10rem;
    height: 10rem;
    pointer-events: none;
    animation: loop 0.5s infinite ease-in forwards;
  }
}
@keyframes loop {
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(-360deg);
  }
}
</style>
