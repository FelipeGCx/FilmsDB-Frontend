<template>
  <!-- form for create  -->
  <div class="new-register">
    <h1>New Register</h1>
    <form @submit.prevent="showModal">
      <div class="first-container">
        <div class="fields-container">
          <div class="field || multi-select">
            <label>Type</label>
            <div class="checkbox">
              <label class="check" for="movie"
                >Movie<input
                  type="radio"
                  id="movie"
                  name="type_content"
                  value="Movie"
                  checked="checked"
              /></label>
              <label class="check" for="anime"
                >Anime<input
                  type="radio"
                  id="anime"
                  name="type_content"
                  value="Anime"
              /></label>
              <label class="check" for="serie"
                >Serie<input
                  type="radio"
                  id="serie"
                  name="type_content"
                  value="Serie"
              /></label>
            </div>
          </div>
          <div class="field">
            <label for="titleOG">Original Title</label>
            <input
              class="input"
              name="titleOG"
              v-model="filme.titleOG"
              autocomplete="off"
              required
            />
          </div>
          <div class="field">
            <label for="title">Title</label>
            <input
              class="input"
              name="title"
              v-model="filme.title"
              required
              autocomplete="off"
            />
          </div>
          <div class="field">
            <label for="year">Year</label>
            <input
              class="year || input"
              type="number"
              name="year"
              :min="1896"
              :max="filme.year"
              maxlength="4"
              minlength="4"
              v-model="filme.year"
              required
            />
          </div>
          <div class="field">
            <label for="note">Note</label>
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
          <div class="field">
            <label for="category">Category</label>
            <select class="input" id="category" v-model="filme.category">
              <option value="0" disabled selected>Select Category</option>
              <option
                v-for="(item, index) in Categories"
                :key="index"
                :value="item.id"
              >
                {{ item.category }}
              </option>
            </select>
          </div>
          <div class="field">
            <label for="saga">Saga</label>
            <select class="input" id="saga" v-model="filme.saga">
              <option value="0" disabled selected>Select Saga</option>
              <option
                v-for="(item, index) in Sagas"
                :key="index"
                :value="item.id"
              >
                {{ item.saga }}
              </option>
            </select>
          </div>
          <div class="field">
            <label for="language">Language</label>
            <div class="language || radios">
              <label class="container" :class="!filme.language ? 'active' : ''"
                >dddd
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
        <div class="image-container">
          <div class="container-selector">
            <input
              type="file"
              id="select-image"
              accept="image/*"
              @change="fileSelected"
            />
            <label for="select-image" class="selector">Image</label>
            <label for="select-image" class="name-file">
              <p class="img-parraf">{{ this.file.name }}</p>
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
          <div class="field">
            <label for="favorite">Favorite</label>
            <div class="favorite || radios">
              <label for="normal"
                >Normal
                <input
                  class="checkmark"
                  type="radio"
                  checked="checked"
                  id="normal"
                  name="favorite"
                />
              </label>
              <label for="favorite"
                >Favorite
                <input
                  class="checkmark"
                  type="radio"
                  id="favorite"
                  name="favorite"
                />
              </label>
            </div>
          </div>
          <div class="fields">
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
      <div class="second-container">
        <div class="field">
          <label for="info">More Info</label>
          <input name="info" v-model="filme.info" />
        </div>
        <div class="field">
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
            >Cancel</router-link
          >
          <button type="submit" :disabled="invalidImage" class="main-button">
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import apollo library, firebase storage for the images, base64 library for tranform images and componets required
export default {
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
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
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

.new-register {
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .first-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      .fields-container {
        .multi-select {
          .checkbox {
            width: 100%;
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            label {
              $lab: &;
              cursor: pointer;
              position: relative;
              user-select: none;
              &:has(input:checked) {
                background-color: $primary-color;
                color: $secondary-color;
              }
              input {
                opacity: 0;
                position: absolute;
                &:checked #{$lab} {
                  background-color: $primary-color;
                  color: $secondary-color;
                }
              }
            }
          }
        }
        .note-container {
          display: flex;
          gap: 1rem;
          .note {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            background-color: transparent;
            padding: 0;
            &:focus {
              outline: none;
            }
            &::-webkit-slider-runnable-track {
              width: 100%;
              height: 13px;
              cursor: pointer;
              background: $primary-color;
              border-radius: 25px;
            }
            &::-webkit-slider-thumb {
              height: 1.3rem;
              width: 1.3rem;
              border-radius: 27px;
              cursor: pointer;
              -webkit-appearance: none;
              appearance: none;
              margin-top: -3.5px;
            }
            &:focus::-webkit-slider-runnable-track {
              background: $primary-color;
            }
          }
          .note-number {
            min-width: 3rem;
            text-align: center;
            border-radius: $border-radius;
            padding: 0.3rem 0.5rem;
            font-weight: 600;
          }
        }
      }
    }
    .second-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
    }
    input {
      text-align: start;
    }
    label {
      align-self: flex-start;
      color: $secondary-color;
    }
  }
}

// .type,
// .language {
//   display: flex;
//   gap: 1rem;
// }
// .container {
//   background-color: var(--bg-btn-header);
//   padding: 0.5rem 1rem;
//   border-radius: var(--radius);
//   cursor: pointer;
//   width: 100%;
// }
// .checkmark {
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
// }

// .radios {
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   gap: 1rem;
// }

// .category {
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
// }

img {
  height: 26rem;
  width: 17rem;
  border-radius: 1rem;
}
// /* input {
//     border: 0.1rem solid var(--border-input);
//     text-align: initial;
//     padding: 0 0.5rem;
//   } */
// select {
//   height: 2rem;
//   border: 0.1rem solid var(--border-input);
//   border-radius: var(--radius);
//   outline: 0;
//   padding: 0 0.5rem;
//   -webkit-appearance: none;
//   -moz-appearance: none;
//   appearance: none;
//   /* background-image: url(../assets/icons/arrow_drop_down.svg); */
//   background-repeat: no-repeat;
//   background-position-x: right;
//   background-position-y: center;
// }
// textarea {
//   border: 0.1rem solid var(--border-input);
//   border-radius: var(--radius);
//   padding: 0.5rem;
//   text-align: initial;
//   resize: none;
//   height: 30vh;
//   outline: 0;
// }
// textarea::-webkit-scrollbar {
//   height: 1rem;
//   width: 1rem;
// }
// textarea::-webkit-scrollbar-corner {
//   background-color: transparent;
// }
// textarea::-webkit-scrollbar-thumb {
//   background-clip: padding-box;
//   background-color: var(--bg-main-button);
//   border: 0.1rem solid transparent;
//   border-radius: 1rem;
// }
// .container-input {
//   display: flex;
//   flex-direction: column;
//   gap: 0.3rem;
//   padding-top: 1rem;
// }
// .buttons {
//   margin-top: 2rem;
//   display: flex;
//   gap: 1rem;
//   align-self: flex-end;
// }
// .container-image {
//   padding-top: 1rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
// .container-selector {
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   margin: 1rem 0;
//   border-radius: var(--radius);
//   border: 0.1rem solid var(--border-input);
//   overflow: hidden;
//   height: 2rem;
//   width: 17rem;
// }
// input[type="file"] {
//   display: none;
// }
// i {
//   color: tomato;
// }
// .selector {
//   padding: 0.2rem 1rem;
//   color: var(--color-clear);
// }
// .name-file {
//   display: flex;
//   padding-left: 0.5rem;
//   width: 100%;
//   height: 100%;
//   border: none;
//   background-color: var(--color-clear);
//   align-items: center;
//   white-space: nowrap;
//   color: var(--color-dark);
// }
// input[type="number"] {
//   padding-right: 0.3rem;
//   // background-image: url(../assets/icons/arrows_scroll.svg);
//   background-repeat: no-repeat;
//   background-position-x: right;
//   background-position-y: center;
// }
// input[type="number"]::-webkit-inner-spin-button {
//   opacity: 0;
// }
// .main-button:disabled {
//   background-color: gray;
// }
// .cont-image {
//   position: relative;
// }
// .img-done,
// .img-load {
//   width: 2.5rem;
//   position: absolute;
//   right: 0.7rem;
//   bottom: 1rem;
//   background: $secondary-color;
//   border-radius: 50%;
//   padding: 0.3rem;
// }
// .img-load {
//   animation: load 2s infinite linear;
// }
// @keyframes load {
//   0% {
//     transform: rotate(0deg);
//   }
//   100% {
//     transform: rotate(-360deg);
//   }
// }
</style>
