<template>
  <form action="">
    <label for="type">Type</label>
    <select name="type" id="type">
      <option value="All">All</option>
      <option value="Movie">Movie</option>
      <option value="Anime">Anime</option>
      <option value="Serie">Serie</option>
    </select>
    <label for="year">Year</label>
    <input
      type="number"
      min="1896"
      max="2099"
      maxlength="4"
      minlength="4"
      step="1"
      name="year"
    />
    <label for="note">Note</label>
    <input
      class="input"
      type="number"
      min="0"
      max="10.0"
      maxlength="3"
      minlength="3"
      step="0.1"
      name="note"
    />
    <button type="submit">Filter</button>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    checkYear(e) {
      console.log(e.target.value.length);
      if (e.target.value.length > 3) {
        e.target.value = "1000";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  gap: 1rem;
  align-items: center;
  select {
    background-color: $base-third-color;
    border: none;
    outline: none;
    border-radius: $border-radius;
    padding: 0.6rem;
    option {
      font-style: inherit;
      &:hover {
        background-color: $neutral-second-color;
        color: $base-color;
      }
    }
  }
  label,
  input,
  select,
  button {
    color: $secondary-color;
    font-style: italic;
    font-weight: 500;
    font-size: 1.5rem;
  }
  input {
    max-width: 8rem;
    padding: 0.6rem 2rem;
    appearance: none;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
  input {
    background-color: $base-third-color;
    border-radius: $border-radius;
  }
  button {
    background-color: $primary-color;
    border-radius: $border-radius;
    padding: 0.6rem 2rem;
  }
}
</style>
