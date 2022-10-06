<template>
  <div>
    <img
      :src="require('@/assets/icons/error-server.svg')"
      alt="FilmsDB error"
      draggable="false"
    />
    <h1>an error has occurred</h1>
    <span>try reload</span>
    <button class="main-button" @click="location.reload()">Reload</button>
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
  gap: 1rem;
  img {
    width: 10rem;
    height: 10rem;
    pointer-events: none;
  }
}
</style>
