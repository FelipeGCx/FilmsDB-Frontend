<template>
  <div class="note">
    <the-button-close @btnClicked="$emit('clicked')" />
    <div class="note-form | blur">
      <the-note-input @change="handlerChange" />
      <router-link
        class="main-button"
        @click="$emit('clicked')"
        :to="goToHomeFilterNote()"
      >
        Search
      </router-link>
    </div>
  </div>
</template>

<script>
import TheButtonClose from "@/components/TheButtonClose.vue";
import TheNoteInput from "@/components/TheNoteInput.vue";
export default {
  components: { TheButtonClose, TheNoteInput },
  data() {
    return {
      note: 10,
    };
  },
  methods: {
    handlerChange(note) {
      this.note = note;
    },
    goToHomeFilterNote() {
      return {
        name: "Home",
        query: {
          note: this.note,
          page: 1,
        },
      };
    },
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
