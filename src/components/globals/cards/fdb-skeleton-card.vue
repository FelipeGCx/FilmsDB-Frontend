<template>
  <div class="skeleton_card">
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.skeleton_card {
  font-size: 1.4rem;
  border: 0.2em solid transparent;
  border-radius: 1em;
  position: relative;
  overflow: hidden !important;
  overflow-y: hidden !important;
  overflow-x: hidden !important;
  text-overflow: ellipsis !important;
  transition: all 1s ease;
  display: flex;
  justify-content: center;
  user-select: none;
  width: 100%;
  aspect-ratio: 2/3;
  background-color: $color-dark;

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-blend-mode: saturation;
    mix-blend-mode: darken;
    isolation: isolate;
    border: 1px solid #fff;
    animation: shine 1s linear infinite;
    background: linear-gradient(
      to right,
      #ffffff00 0%,
      #313131 50%,
      #4d5b0000 100%
    );
  }
}
@keyframes shine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>
