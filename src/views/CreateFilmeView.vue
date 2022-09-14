<template>
  <!-- modal for create -->
  <Modal
    v-show="modal.visible"
    :questionText="modal.questionText"
    :successText="modal.successText"
    :errorText="modal.errorText"
    :error="modal.error"
    :question="modal.question"
    :success="modal.success"
    :auth="modal.auth"
    :load="modal.load"
    @questionRequest="questionRequest"
    @authRequest="authRequest"
    @request="request"
  />
  <!-- form for create  -->
  <div class="new-register">
    <h1>Nuevo Registro</h1>
    <form @submit.prevent="showModal">
      <div class="first-container">
        <div class="inputs">
          <div class="container-input">
            <label for="type">Tipo</label>
            <div class="type || radios">
              <label
                class="container"
                :class="filme.type == 'Movie' ? 'active' : ''"
                >Movie
                <input
                  class="checkmark"
                  type="radio"
                  checked="checked"
                  @click="
                    filme.type = 'Movie';
                    seasonVisible = false;
                  "
                  name="radio"
                />
              </label>
              <label
                class="container"
                :class="filme.type == 'Anime' ? 'active' : ''"
                >Anime
                <input
                  class="checkmark"
                  type="radio"
                  @click="
                    filme.type = 'Anime';
                    seasonVisible = true;
                  "
                  name="radio"
                />
              </label>
              <label
                class="container"
                :class="filme.type == 'Serie' ? 'active' : ''"
                >Serie
                <input
                  class="checkmark"
                  type="radio"
                  @click="
                    filme.type = 'Serie';
                    seasonVisible = true;
                  "
                  name="radio"
                />
              </label>
            </div>
          </div>
          <div class="container-input">
            <label for="titleOG">Titulo Original</label>
            <input name="titleOG" v-model="filme.titleOG" required />
          </div>
          <div class="container-input">
            <label for="title">Titulo</label>
            <input name="title" v-model="filme.title" required />
          </div>
          <div class="container-input">
            <label for="year">Año</label>
            <input
              class="year"
              type="number"
              name="year"
              v-model="filme.year"
              required
            />
          </div>
          <div class="container-input">
            <label for="note">Nota</label>
            <div class="note-container">
              <input
                class="note"
                type="range"
                min="1"
                max="10"
                step="0.1"
                name="note"
                v-model="filme.note"
              />
              <span class="note-number">{{ filme.note }}</span>
            </div>
          </div>
          <div class="container-input">
            <label for="category">Categoria</label>
            <select id="category" v-model="filme.category">
              <option value="0" disabled selected>
                Selecione una Categoria
              </option>
              <option
                v-for="(item, index) in Categories"
                :key="index"
                :value="item.id"
              >
                {{ item.category }}
              </option>
            </select>
          </div>
          <div class="container-input">
            <label for="saga">Saga</label>
            <select id="saga" v-model="filme.saga">
              <option value="0" disabled selected>Selecione una Saga</option>
              <option
                v-for="(item, index) in Sagas"
                :key="index"
                :value="item.id"
              >
                {{ item.saga }}
              </option>
            </select>
          </div>
          <div class="container-input">
            <label for="language">Lenguage</label>
            <div class="language || radios">
              <label class="container" :class="!filme.language ? 'active' : ''"
                >Doblado
                <input
                  class="checkmark"
                  type="radio"
                  checked="checked"
                  @click="filme.language = false"
                  name="radio"
                />
              </label>
              <label class="container" :class="filme.language ? 'active' : ''"
                >Original
                <input
                  class="checkmark"
                  type="radio"
                  @click="filme.language = true"
                  name="radio"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="container-image">
          <div class="container-selector">
            <input
              type="file"
              id="select-image"
              accept="image/*"
              @change="fileSelected"
            />
            <label for="select-image" class="selector">Imagen</label>
            <label for="select-image" class="name-file">
              <p v-if="this.file.name.length > 20">
                {{ this.file.name.slice(0, 20) }} ...
              </p>
              <p v-else>{{ this.file.name }}</p>
            </label>
          </div>
          <label for="select-image" class="cont-image">
            <img :src="filme.poster" />
            <svg
              class="img-load"
              viewBox="0 0 24 24"
              v-show="iconImage.first"
              v-html="iconImage.load"
            ></svg>
            <svg
              class="img-done"
              viewBox="0 0 24 24"
              v-show="iconImage.second"
              v-html="iconImage.done"
            ></svg>
          </label>
          <div class="container-input">
            <label for="favorite">Favorito</label>
            <div class="favorite || radios">
              <label class="container" :class="!filme.favorite ? 'active' : ''"
                >Normal
                <input
                  class="checkmark"
                  type="radio"
                  checked="checked"
                  @click="filme.favorite = false"
                  name="radio"
                />
              </label>
              <label class="container" :class="filme.favorite ? 'active' : ''"
                >Favorito
                <input
                  class="checkmark"
                  type="radio"
                  @click="filme.favorite = true"
                  name="radio"
                />
              </label>
            </div>
          </div>
          <div class="container-input">
            <label v-show="seasonVisible" for="season">Season</label>
            <input
              v-show="seasonVisible"
              name="season"
              type="number"
              v-model="filme.season"
            />
          </div>
        </div>
      </div>
      <!-- v-model="filme.favorite" -->

      <div class="second-container">
        <div class="container-input">
          <label for="info">Más Info</label>
          <input name="info" v-model="filme.info" />
        </div>
        <div class="container-input">
          <label for="link">Link</label>
          <input name="link" v-model="filme.link" />
        </div>
        <div class="buttons">
          <router-link
            class="sub-button"
            :to="{
              name: 'All',
              params: { page: 1 },
            }"
            >Cancelar</router-link
          >
          <button type="submit" :disabled="invalidImage" class="main-button">
            Guardar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import apollo library, firebase storage for the images, base64 library for tranform images and componets required
import gql from "graphql-tag";
import { app } from "@/utils/firebaseConfig";
import { fileToBase64, base64ToFile } from "@/utils/base64Manager.js";
import Modal from "@/components/Modal.vue";
export default {
  components: { Modal },
  name: "CreateFilme",
  data() {
    return {
      filme: {
        type: "Movie",
        title: null,
        titleOG: null,
        year: new Date().getFullYear(),
        note: 10,
        language: false,
        category: 0,
        favorite: false,
        info: " ",
        link: " ",
        poster:
          "https://firebasestorage.googleapis.com/v0/b/films-a2d18.appspot.com/o/assets%2FNot%20Found%20Image.webp?alt=media&token=8bfcfa56-b828-4db9-9c74-82e34324f673",
        season: 0,
        saga: 0,
      },
      seasonVisible: false,
      file: {
        name: "",
      },
      base64: null,
      invalidImage: false,
      modal: {
        visible: false,
        questionText: "¿Agregar Registro?",
        successText: "Registro Creado",
        errorText: "El Registro Fallo",
        error: false,
        question: true,
        success: false,
        auth: false,
        load: false,
      },
      iconImage: {
        first: false,
        second: false,
        load: "<path  d='M12 4V2.21c0-.45-.54-.67-.85-.35l-2.8 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.86.09.86-.36V6c3.31 0 6 2.69 6 6 0 .79-.15 1.56-.44 2.25-.15.36-.04.77.23 1.04.51.51 1.37.33 1.64-.34.37-.91.57-1.91.57-2.95 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-.79.15-1.56.44-2.25.15-.36.04-.77-.23-1.04-.51-.51-1.37-.33-1.64.34C4.2 9.96 4 10.96 4 12c0 4.42 3.58 8 8 8v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V18z'/>",
        done: "<path d='M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm5.01-4.1c-.78.77-2.04.77-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96l-7 6.93z'/>",
      },
    };
  },
  // get queries
  apollo: {
    Sagas: {
      query: gql`
        query GetSagas {
          getSagas {
            id
            saga
            svg
          }
        }
      `,
      update: (data) => data.getSagas,
    },
    Categories: {
      query: gql`
        query GetCategories {
          getCategories {
            id
            category
            svg
          }
        }
      `,
      update: (data) => data.getCategories,
    },
  },
  methods: {
    // get the image that user upload and create blob
    async fileSelected(e) {
      this.invalidImage = true;
      this.iconImage.first = true;
      this.file = e.target.files[0];
      this.filme.poster = URL.createObjectURL(this.file);
      this.resizeImage();
    },
    // convert the image to base64 and resize it to 467x700 in format .webp
    async resizeImage() {
      // parse file to base64
      this.base64 = await fileToBase64(this.file);
      // set the image params
      const image = {
        name: "image",
        size_x: 467,
        size_y: 700,
        type_format: ".webp",
        base64: this.base64,
      };
      // make the mutation to resize the image passing the image object
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation ResizeImage($imageInput: imageInput!) {
              resizeImage(imageInput: $imageInput)
            }
          `,
          variables: {
            imageInput: image,
          },
        })
        .then((result) => {
          this.base64 = result.data.resizeImage;
          this.iconImage.first = false;
          this.iconImage.second = true;
          this.loadImageB64();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // transform the base64 image to blob
    async loadImageB64() {
      // parse base64 to blob
      this.file = await base64ToFile(
        this.base64,
        `${this.filme.titleOG} (${this.filme.year})`,
        "webp"
      );
      this.filme.poster = URL.createObjectURL(this.file);
      // change the value for show the success of process
      this.invalidImage = false;
      setTimeout(() => {
        this.iconImage.second = false;
      }, 1000);
    },
    // show the modal to confirm the save process
    showModal() {
      this.modal.visible = true;
    },
    // continue the save process if the aswr is positive else close the modal
    questionRequest(aswr) {
      if (aswr) {
        this.modal.question = false;
        this.modal.auth = true;
      } else {
        this.modal.visible = false;
      }
    },
    // call the fucntion to save the film if the user auth is correct else show the modal error message
    authRequest(aswr) {
      if (aswr) {
        this.modal.auth = false;
        this.modal.load = true;
        this.saveFilme();
      } else {
        this.modal.auth = false;
        this.modal.errorText = "No Autorizado";
        this.modal.error = true;
      }
    },
    // close the modal and redirect to Home
    request(aswr) {
      this.modal.visible = false;
      if (aswr) {
        this.$router.push({
          name: "All",
          params: { page: 1 },
        });
      }
    },
    // save the film in the database
    async saveFilme() {
      this.filme.title = this.toTitleCase(this.filme.title);
      this.filme.titleOG = this.toTitleCase(this.filme.titleOG);
      this.filme.note = parseFloat(this.filme.note);
      // save image in the firebase storage
      await this.saveImage();
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation CreateFilm($filmInput: FilmInput) {
              createFilm(filmInput: $filmInput) {
                id
                type
              }
            }
          `,
          variables: {
            filmInput: this.filme,
          },
        })
        .then((result) => {
          this.modal.load = false;
          this.modal.success = true;
        })
        .catch((error) => {
          this.modal.load = false;
          this.modal.errorText = "El Registro Fallo";
          this.modal.error = true;
        });
    },
    // save the image in the firebase storage
    async saveImage() {
      // create a storage ref
      const storageRef = app.storage().ref();
      // create a child ref (define the path and set the name of the file, in this case => "movieTitle (movieYear)")
      const filePath = storageRef.child(
        `/assets/${this.filme.titleOG} (${this.filme.year})`
      );
      // upload the file
      await filePath.put(this.file);
      // get the url of the file for save it in the database
      this.filme.poster = await filePath.getDownloadURL();
    },
    // parse to Title Case
    toTitleCase(str) {
      return str
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
/* ////////////////////////// */
@media only screen and (min-width: 1024px) {
  .new-register {
    margin: 0 20vw;
  }
  h1 {
    display: flex;
  }
}
@media only screen and (min-width: 750px) and (max-width: 1024px) {
  .new-register {
    margin: 0 16vw;
  }
  h1 {
    display: flex;
  }
}
@media only screen and (max-width: 750px) {
  .first-container {
    flex-direction: column;
  }
  .new-register {
    margin: 0 13vw;
  }
}
@media only screen and (max-width: 550px) {
  .buttons {
    align-self: center;
    width: 100%;
    justify-content: space-around;
  }
  .buttons button,
  a {
    width: 50%;
  }
}
label {
  color: var(--color-clear);
}
input {
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
}
.type,
.language {
  display: flex;
  gap: 1rem;
}
.container {
  background-color: var(--bg-btn-header);
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  width: 100%;
}
.checkmark {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.note {
  -webkit-appearance: none;
  width: 100%;
  background-color: transparent;
  padding: 0;
}
.note:focus {
  outline: none;
}
.note::-webkit-slider-runnable-track {
  width: 100%;
  height: 13px;
  cursor: pointer;
  background: var(--bg-btn-header);
  border-radius: 25px;
}
.note::-webkit-slider-thumb {
  height: 1.3rem;
  width: 1.3rem;
  border-radius: 27px;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.5px;
}
.note:focus::-webkit-slider-runnable-track {
  background: var(--bg-btn-header);
}
.note-container {
  display: flex;
  gap: 1rem;
}
.note-number {
  color: var(--color-clear);
  min-width: 3rem;
  text-align: center;
  border-radius: var(--radius);
  padding: 0.3rem 0.5rem;
  font-weight: 600;
}
.radios {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.first-container {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
h1 {
  margin-top: 1rem;
}
.inputs {
  width: 100%;
  max-width: 28rem;
  display: inline-grid;
}
.second-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* padding-bottom: 3rem; */
}
.category {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
label {
  align-self: flex-start;
}
img {
  height: 26rem;
  width: 17rem;
  border-radius: 1rem;
}
/* input {
    border: 0.1rem solid var(--border-input);
    text-align: initial;
    padding: 0 0.5rem;
  } */
select {
  height: 2rem;
  border: 0.1rem solid var(--border-input);
  border-radius: var(--radius);
  outline: 0;
  padding: 0 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* background-image: url(../assets/icons/arrow_drop_down.svg); */
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
}
textarea {
  border: 0.1rem solid var(--border-input);
  border-radius: var(--radius);
  padding: 0.5rem;
  text-align: initial;
  resize: none;
  height: 30vh;
  outline: 0;
}
textarea::-webkit-scrollbar {
  height: 1rem;
  width: 1rem;
}
textarea::-webkit-scrollbar-corner {
  background-color: transparent;
}
textarea::-webkit-scrollbar-thumb {
  background-clip: padding-box;
  background-color: var(--bg-main-button);
  border: 0.1rem solid transparent;
  border-radius: 1rem;
}
a {
  text-decoration: underline;
  text-align: center;
}
.container-input {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 1rem;
}
.buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  align-self: flex-end;
}
.container-image {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-selector {
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  border-radius: var(--radius);
  border: 0.1rem solid var(--border-input);
  overflow: hidden;
  height: 2rem;
  width: 17rem;
}
input[type="file"] {
  display: none;
}
i {
  color: tomato;
}
.selector {
  padding: 0.2rem 1rem;
  color: var(--color-clear);
}
.name-file {
  display: flex;
  padding-left: 0.5rem;
  width: 100%;
  height: 100%;
  border: none;
  background-color: var(--color-clear);
  align-items: center;
  white-space: nowrap;
  color: var(--color-dark);
}
input[type="number"] {
  padding-right: 0.3rem;
  background-image: url(../assets/icons/arrows_scroll.svg);
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;
}
input[type="number"]::-webkit-inner-spin-button {
  opacity: 0;
}
.main-button:disabled {
  background-color: gray;
}
.cont-image {
  position: relative;
}
.img-done,
.img-load {
  width: 2.5rem;
  position: absolute;
  right: 0.7rem;
  bottom: 1rem;
  background: var(--color-clear);
  border-radius: 50%;
  padding: 0.3rem;
}
.img-load {
  animation: load 2s infinite linear;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
