<template>
  <header>
    <fdb-logo />
    <nav>
      <ul>
        <li>
          <fdb-icon icon="search" />
        </li>
        <li>
          <fdb-icon icon="saga" />
        </li>
        <li>
          <fdb-icon icon="category" />
        </li>
        <li>
          <fdb-icon icon="chart" />
        </li>
        <li>
          <fdb-icon icon="square-plus" />
        </li>
        <li>
          <fdb-icon icon="user" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<!-- <script setup lang="ts">
</script> -->

<style lang="scss">
header {
  background-color: $color-background-ascent;
  height: $header-height;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  padding: 0 7vw;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    & > :nth-child(n) {
      width: 3.4rem;
      height: 3.4rem;
      color: $color-light;
    }
  }
}
</style>
