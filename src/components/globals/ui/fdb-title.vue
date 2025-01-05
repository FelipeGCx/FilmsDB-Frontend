<template>
  <h1 v-if="!title">
    <slot></slot>
  </h1>
  <h1 v-else>
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: $color-light;
  font-size: 2.4rem;
  font-weight: 600;
  text-wrap: nowrap;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: $color-light;
    margin-right: 2rem;
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: $color-light;
    margin-left: 2rem;
  }
}
</style>
