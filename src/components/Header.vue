<template>
  <header>
    <div class="container-button">
      <div v-for="(button, idx) in buttons" :key="idx">
          <button @mouseover="btnClicked(button)" :style="{width:button.widthButton}">
            <span>{{ button.value }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
            <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"/>
            </svg>
          </button>
          <div class="dropdown">
              <input v-if="button.search" type="search" placeholder="Buscar" v-show="button.visible" :style="{width:button.width}">
            <div v-for="(item, idx) in button.dropdown" :key="idx"  v-show="button.visible" :style="{width:button.width}" @click="changeValue(button,item)">
              {{ item }}
            </div>
          </div>
      </div>
      <!-- </div>
      
    <div class="block bl-note">
        <div class="btn-note btn-filter" >
            <p id="p-note">Nota</p>
            <svg class="rows-down not"  xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                fill="#FFF">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
        </div>
        <div class="dropdown dp-note" >
            <input class="browser-filter" type="search" placeholder="Buscar" onchange="loadNoteB(value)">
            <div class="drop" id="drop" onclick="loadNote('Alta')">High</div>
            <div class="drop" id="drop" onclick="loadNote('Baja')">Low</div>
        </div>
    </div>
    <div class="block bl-anno">
        <div class="btn-anno btn-filter"  >
            <p id="p-anno">Año</p>
            <svg class="rows-down anno"  xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                fill="#FFF">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
        </div>
        <div class="dropdown dp-anno" >
            <input class="browser-filter" type="search" placeholder="Buscar" onchange="loadAnnoB(value)">
            <div class="drop" id="drop" onclick="loadAnno('New')">2021</div>
            <div class="drop" id="drop" onclick="loadAnno('Old')">1973</div>
        </div>
    </div>
    <div class="block bl-saga">
        <div class="btn-saga btn-filter" >
            <p id="p-saga" >Collection</p>
            <svg class="rows-down saga"  xmlns="http://www.w3.org/2000/svg" height="24" width="24"
                fill="#FFF">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
        </div>
        <div class="dropdown dp-saga" >
            <div class="drop" id="drop" onclick="loadSaga('Marvel')">Marvel</div>
            <div class="drop" id="drop" onclick="loadSaga('J.K Rowlling')">J.K Rowlling</div>
            <div class="drop" id="drop" onclick="loadSaga('DC')">DC</div>
            <div class="drop" id="drop" onclick="loadSaga('Disney')">Disney</div>
            <div class="drop" id="drop" onclick="loadSaga('Star Wars')">Star Wars</div>
            <div class="drop" id="drop" onclick="loadSaga('X-Men')">X-Men</div>
            <div class="drop" id="drop" onclick="loadSaga('The Purge')">The Purge</div>
            <div class="drop" id="drop" onclick="loadSaga('Conjuring')">Conjuring</div>
            <div class="drop" id="drop" onclick="loadSaga('F&F')">F&F</div>
            <div class="drop" id="drop" onclick="loadSaga('Divergent')">Divergent</div>
            <div class="drop" id="drop" onclick="loadSaga('HungerGames')">H. Games</div>
            <div class="drop" id="drop" onclick="loadSaga('Anime')">Anime</div>
        </div>
    </div>
    <div class="block bl-fav">
        <div class="btn-favorities btn-filter">
            <p id="p-favorities">Favoritos</p>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
        </div>
    </div>
    <div class="block bl-language">
        <div class="btn-language btn-filter">
            <p id="p-language">Idioma</p>
        </div>
    </div>
    <div class="block bl-browser">
        <input class="browser" type="search" placeholder="Buscar" >
    </div> -->
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
        width:1000,
      buttons: {
        category: {
          value: "All",
          dropdown: ["All", "Movie", "Serie", "Anime"],
          widthButton: '7rem',
          width: '6.6rem',
          visible:false,
        },
        favorities: {
          value: "Favoritos",
          dropdown: ["All", "Movie", "Serie", "Anime"],
          widthButton: '8.5rem',
          width: '8.1rem',
          visible:false,
        },
        note: {
          value: "Nota",
          dropdown: ["Alta", "Baja"],
          widthButton: '6.5rem',
          width: '6.1rem',
          visible:false,
          search:true,
        },
        year: {
          value: "Año",
          dropdown: ["New", "Old"],
          widthButton: '6rem',
          width: '5.6rem',
          visible:false,
          search:true,
        },
      },
    };
  },
  methods: {
      btnClicked(button){
          button.visible = !button.visible;
      },
      changeValue(button,item){
          button.value = item;
          button.visible = !button.visible;
      },
  },
};
</script>

<style scoped>
.container-button {
    display: flex;
    flex-direction: row;
    gap:1rem
    
}
.container-button button {
    font-size: 1rem;
    color: white;
 display: flex;
    flex-direction: row;
    padding: 0 1rem;
    align-items: center;
    background-color: #00f;
    border-radius: 5rem;
    justify-content: space-between;
}
.container-button button svg {
  fill: white;
  width: 2rem;
  height: 2rem;
  margin: .2rem;
  transform: translateX(40%);
}
.dropdown {
      display: flex;
    background: #8a2be2;
    position: absolute;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    transform: translateY(-2.5vh);
    z-index: -1;
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    overflow: hidden;
}
.dropdown div{
    padding: .2rem;
    color:white;
}
.dropdown div:hover{
    background-color: brown;
    cursor: pointer;
}
.dropdown input{
    background-color: #cda8f0;
    height: 1.5rem;
    border-radius: 5rem;
    text-align: start;
    padding: 0 .7rem 0 .2rem;
}
/* .dropdown input {
  color: white;
  background-color: var(--browser);
  border-radius: 50px;
  width: 100%;
  height: 35px;
  font-size: 12pt;
  padding-left: 15px;
  text-align: center;
  border: solid 0.2rem var(--border);
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: 0;
} */

.dropdown input::-webkit-search-cancel-button {
  /* position: relative; */
  /* right: 5px; */
  -webkit-appearance: none;
  height: 1rem;
  width: 1rem;
  background-image: url(../assets/icons/close_rounded.svg);
  background-size: 1rem;
}
.dropdown input::-webkit-input-placeholder {
  color: white;
  opacity: 60%;
}





select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
header {
  position: sticky;
  top: 0;
  height: 8vh;
  width: 100vw;
  background-color: var(--header-background);
  border-top: solid 0.1rem #8ae9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0 5vw;
}

.block {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 5rem;
  width: 180px;
  margin-right: 10px;
  height: 35px;
}
.btn-filter {
  cursor: pointer;
  color: white;
  background-color: var(--botton);
  border-radius: 50px;
  min-width: 60px;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.btn-filter:target {
  background-color: blueviolet;
}
.dropdowns {
  display: none;
  position: absolute;
  color: white;
  flex-direction: column;
  align-items: center;
  transition: auto 1s ease 0s;
  transform: translateY(22px);
  height: fit-content;
  min-width: 50px;
  background-color: var(--dropdawm);
  padding-top: 20px;
  padding-bottom: 5px;
  z-index: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  justify-content: flex-start;
}
.drop {
  cursor: pointer;
  text-align: center;
  border-radius: 5px;
  width: 100%;
}
.drop:hover {
  background-color: var(--dropdawm-hover);
}
.browser-filter {
  color: white;
  background-color: var(--dropdawm);
  border-radius: 5px;
  width: 97%;
  height: 25px;
  font-size: 11pt;
  text-align: center;
  border: none;
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: 0;
  padding-left: 25px;
}
.browser-filter::-webkit-search-cancel-button {
  position: relative;
  right: 5px;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  /* background-image: url(icons/close_white_18dp.svg); */
}
.browser-filter::-webkit-input-placeholder {
  color: white;
  opacity: 60%;
}
.browser {
  color: white;
  background-color: var(--browser);
  border-radius: 50px;
  width: 100%;
  height: 35px;
  font-size: 12pt;
  padding-left: 15px;
  text-align: center;
  border: solid 0.2rem var(--border);
  /* border:none; */
  background-image: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  outline: 0;
}

.browser::-webkit-search-cancel-button {
  position: relative;
  right: 5px;
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  /* background-image: url(icons/close_white_18dp.svg); */
}
.browser::-webkit-input-placeholder {
  color: white;
  opacity: 60%;
}
/* .rows-down{
    position: relative;
    width: 24px;
    right: -30px;
} */
.all {
  position: relative;
  width: 24px;
}
.fav {
  position: relative;
  width: 24px;
}
.not {
  position: relative;
  width: 24px;
}
.anno {
  position: relative;
  width: 24px;
}
.saga {
  position: relative;
  width: 24px;
}
/* .dropdown{
    position: absolute;
    transform: translateY(50px);
    background-color: aqua;
    height: 99px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    z-index: 1;
    min-width: 60px;
    width: 180px;
} */
</style>