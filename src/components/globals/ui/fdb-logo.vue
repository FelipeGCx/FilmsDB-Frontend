<template>
  <a to="/" draggable="false" class="logo">
    <logo />
    <h1>{{ title }}</h1>
  </a>
</template>

<script setup lang="ts">
import { Logo } from "@/assets/icons";
import { title } from "@/constants";
</script>

<style lang="scss">
.logo {
  color: $color-light;
  display: inline-flex;
  gap: 1rem;
  align-items: center;
  svg {
    width: 3.4rem;
    height: 3.4rem;
  }
  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    font-style: italic;
    user-select: none;
    transition: all 0.3s ease;
    display: none;

    @include xs {
      & {
        display: flex;
      }
    }
  }
}
</style>
