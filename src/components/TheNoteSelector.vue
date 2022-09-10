<template>
  <div class="note">
    <the-button-close @btnClicked="$emit('clicked')" />
    <form @submit.prevent="false" class="note-form | blur">
      <the-note-input />
      <button class="main-button">Search</button>
    </form>
  </div>
</template>

<script>
import TheButtonClose from "./TheButtonClose.vue";
import TheNoteInput from "./TheNoteInput.vue";
export default {
  components: { TheButtonClose, TheNoteInput },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.note {
  position: fixed;
  width: 100%;
  top: 5.4rem;
  left: 0;
  bottom: 9.4rem;
  .note-form {
    z-index: 3;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    &::-webkit-scrollbar {
      width: 0;
    }
    button {
      width: 11rem !important;
    }
  }
}
</style>
