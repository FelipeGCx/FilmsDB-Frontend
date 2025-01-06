<template>
  <div class="skeleton_card">
    <img
    src="https://firebasestorage.googleapis.com/v0/b/films-a2d18.appspot.com/o/assets%2FNot%20Found%20Image.webp?alt=media&token=8bfcfa56-b828-4db9-9c74-82e34324f673"
    class="poster" loading="lazy" oncontextmenu="return false" oncopy="return
    false" oncut="return false" draggable="false" type=”image/webp” />
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
  background-color: $color-dark;

  &:after {
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  background-blend-mode: saturation;
  mix-blend-mode: darken;
  isolation: isolate;
  border: 1px solid #fff;
  animation: shine 1s linear infinite;
  background: linear-gradient(to right, #ffffff00 0%, #313131 50%, #4d5b0000 100%);
}

  .poster {
    opacity: 0;
    width: 100%;
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
