<template>
  <div class="search">
        <input
          id="search-browser"
          class="browser"
          type="text"
          name="browser"
          placeholder="Buscar"
          v-model="title"
          v-on:keyup.enter="searchFilme"
        />
        <button id="search" @click="searchFilme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path
              d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
        </button>
      </div>
</template>

<script>
export default {
data() {
    return {
        title:null,
    }
},
methods: {
    searchFilme(){
        this.$router.push({name:'Title',params:{title:this.title},query:{page:1}});
        this.title = null;
        this.$emit("hideSearch");
    }
},
}
</script>

<style scoped>
.search {
  position: relative;
  display: flex;
  border: none;
  border-radius: var(--radius);
  color: var(--bg);
  background-color: #ffffff;
  height: 3rem;
  width: 30vw;
  min-width: 19rem;
  justify-content: space-between;
  overflow: hidden;
}
.browser {
  font-size: 1.05rem;
  background-image: none;
  box-shadow: none;
  outline: 0;
  width: 100%;
  text-align: initial;
  padding-left: 1rem;
  height: 100%;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  border:none;
}
.browser::-webkit-input-placeholder {
  color: var(--border-input);
  opacity: 80%;
}
.search svg {
  fill: var(--border-input);
  transition: all 1s ease;
}
.search svg:hover {
  animation-name: iconmove;
  animation-duration: 1s;
}
.search button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  border:none;
  background-color: transparent;
}
@keyframes iconmove {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(6%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>