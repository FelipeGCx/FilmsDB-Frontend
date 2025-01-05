<template>
  <header>
    <fdb-logo />
  </header>
</template>

<script setup lang="ts">
import { FdbLogo } from "@/components/globals/ui";
</script>

<style lang="scss">
header {
  background-color: $color-background-ascent;
  height: $header-height;
  display: flex;
  justify-content: space-between;
  padding: 0 7vw;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>
