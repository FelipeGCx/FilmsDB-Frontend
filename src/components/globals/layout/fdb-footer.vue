<template>
  <footer>
    <p>
      &copy; 2024
      <a :href="url" target="blanck" class="enterprise">
        <Github class="github-icon" /> FelipeGcx.
      </a>
      All Rights Reserved
    </p>
  </footer>
</template>

<script setup lang="ts">
import { Github } from "@/assets/icons";
const url = "https://github.com/FelipeGCx";
</script>

<style lang="scss">
footer {
  background-color: $color-background-ascent;
  height: $header-height;
  display: flex;
  justify-content: center;
  padding: 0 7vw;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: $color-light;
  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .enterprise {
      display: flex;
      align-items: center;
      color: $color-light;
      gap: 0.5rem;
      .github-icon {
        width: 1.5rem;
        color:  $color-light;
      }
    }
  }
}
</style>
