<template>
  <!-- form for create  -->
  <div class="register">
    <form @submit.prevent="$emit('clicked', filme)">
      <div class="first-container">
        <div class="fields-container">
          <div class="field || multi-select">
            <label>Type</label>
            <div class="checkbox">
              <label
                class="check"
                for="movie"
                :class="filme.type == 'Movie' ? 'active' : ''"
                >Movie<input
                  type="radio"
                  id="movie"
                  name="type_content"
                  value="Movie"
                  checked="checked"
                  @click="
                    filme.type = 'Movie';
                    filme.season = action == 'create' ? 0 : filme.season;
                    seasonVisible = false;
                  "
              /></label>
              <label
                class="check"
                for="anime"
                :class="filme.type == 'Anime' ? 'active' : ''"
                >Anime<input
                  type="radio"
                  id="anime"
                  name="type_content"
                  value="Anime"
                  @click="
                    filme.type = 'Anime';
                    filme.season = action == 'create' ? 1 : filme.season;
                    seasonVisible = true;
                  "
              /></label>
              <label
                class="check"
                for="serie"
                :class="filme.type == 'Serie' ? 'active' : ''"
                >Serie<input
                  type="radio"
                  id="serie"
                  name="type_content"
                  value="Serie"
                  @click="
                    filme.type = 'Serie';
                    filme.season = action == 'create' ? 1 : filme.season;
                    seasonVisible = true;
                  "
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
              <span class="note-number || input">{{ filme.note }}</span>
            </div>
          </div>
          <div class="field">
            <label for="category">Category</label>
            <select class="input" id="category" v-model="filme.category">
              <option value="0" disabled selected>Select Category</option>
              <option
                v-for="(item, index) in categories.data"
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
                v-for="(item, index) in sagas.data"
                :key="index"
                :value="item.id"
              >
                {{ item.saga }}
              </option>
            </select>
          </div>
          <div class="field || multi-select">
            <label for="language">Language</label>
            <div class="language || checkbox">
              <label class="check" :class="!filme.language ? 'active' : ''"
                >Dubbing
                <input
                  type="radio"
                  checked="checked"
                  @click="filme.language = false"
                  name="language"
                  id="dubbing"
                />
              </label>
              <label
                for="original"
                class="check"
                :class="filme.language ? 'active' : ''"
                >Original
                <input
                  type="radio"
                  @click="filme.language = true"
                  name="language"
                  id="original"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="picture-container">
          <div class="img-input">
            <input
              type="file"
              id="select-image"
              accept="image/*"
              @change="fileSelected"
            />
            <label for="select-image">Image</label>
            <label for="select-image">
              <p>{{ this.file.name }}</p>
            </label>
          </div>
          <label for="select-image" class="image-container">
            <img :src="filme.poster" />
            <svg
              class="img-load"
              viewBox="0 0 24 24"
              v-show="iconImage.first"
              v-html="iconImage.load"
              fill="currentColor"
            ></svg>
            <svg
              class="img-done"
              viewBox="0 0 24 24"
              v-show="iconImage.second"
              v-html="iconImage.done"
              fill="currentColor"
            ></svg>
          </label>
          <div class="field || multi-select">
            <label for="favorite">Favorite</label>
            <div class="favorite || checkbox">
              <label
                class="check"
                for="normal"
                :class="!filme.favorite ? 'active' : ''"
                >Normal
                <input
                  type="radio"
                  checked="checked"
                  id="normal"
                  name="favorite"
                  @click="filme.favorite = false"
                />
              </label>
              <label
                class="check"
                for="favorite"
                :class="filme.favorite ? 'active' : ''"
                >Favorite
                <input
                  type="radio"
                  id="favorite"
                  name="favorite"
                  @click="filme.favorite = true"
                />
              </label>
            </div>
          </div>
          <div class="field || season">
            <label for="season">Season</label>
            <input
              class="input"
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
          <input class="input" name="info" v-model="filme.info" />
        </div>
        <div class="field">
          <label for="link">Link</label>
          <input class="input" name="link" v-model="filme.link" />
        </div>
        <div class="buttons">
          <router-link class="sub-button" to="/">Cancel</router-link>
          <button type="submit" :disabled="invalidImage" class="main-button">
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Categories from "@/mixins/categories";
import Sagas from "@/mixins/sagas";
export default {
  name: "CreateFilme",
  props: {
    content: {
      type: Object,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
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
      iconImage: {
        first: false,
        second: false,
        load: "<path  d='M12 4V2.21c0-.45-.54-.67-.85-.35l-2.8 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.32.31.86.09.86-.36V6c3.31 0 6 2.69 6 6 0 .79-.15 1.56-.44 2.25-.15.36-.04.77.23 1.04.51.51 1.37.33 1.64-.34.37-.91.57-1.91.57-2.95 0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-.79.15-1.56.44-2.25.15-.36.04-.77-.23-1.04-.51-.51-1.37-.33-1.64.34C4.2 9.96 4 10.96 4 12c0 4.42 3.58 8 8 8v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V18z'/>",
        done: "<path d='M6 18h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1zm5.01-4.1c-.78.77-2.04.77-2.82-.01L6 11.7c-.55-.55-.54-1.44.03-1.97.54-.52 1.4-.5 1.92.02L9.6 11.4l6.43-6.43c.54-.54 1.41-.54 1.95 0l.04.04c.54.54.54 1.42-.01 1.96l-7 6.93z'/>",
      },
    };
  },
  mixins: [Sagas, Categories],
  computed: {
    seasonOp() {
      return this.seasonVisible ? 1 : 0;
    },
    seasonDp() {
      return this.seasonVisible ? "flex" : "none";
    },
  },
  watch: {
    question: {
      handler() {
        this.filme = this.content;
        console.log("filmein load", this.filme);
      },
      immediate: true,
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 1024px) {
  .new-register {
    margin: 0 20vw;
  }
}
@media only screen and (min-width: 750px) and (max-width: 1024px) {
  .new-register {
    margin: 0 16vw;
  }
}
@media only screen and (max-width: 750px) {
  .new-register {
    margin: 0 13vw;
    align-items: center;
    form {
      width: 100%;
      align-items: center;
      .first-container {
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        .fields-container,
        .picture-container {
          width: 100% !important;
        }
        .checkbox {
          justify-content: space-between;
          label {
            width: 100%;
          }
        }
        .season {
          display: v-bind(seasonDp);
        }
      }
      .second-container {
        width: 100%;
        .buttons {
          justify-content: space-between !important;
          a,
          button {
            width: 100%;
          }
        }
      }
    }
  }
}

.register {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .first-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .fields-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 50%;
        .note-container {
          display: flex;
          gap: 1rem;
          align-items: center;
          .note {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 1rem;
            background: $base-second-color;
            padding: 0;
            &::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              height: 1.5rem;
              width: 1.5rem;
              border-radius: 50%;
              background: $primary-color;
              cursor: ew-resize;
              transition: background 0.3s ease-in-out;
            }
            &::-webkit-slider-runnable-track {
              -webkit-appearance: none;
              appearance: none;
              box-shadow: none;
              border: none;
              background: transparent;
            }
          }
          .note-number {
            min-width: 4.5rem;
            text-align: center;
            border-radius: $border-radius;
            font-weight: 600;
          }
        }
      }
      .picture-container {
        // padding-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 23rem;
        .image-container {
          position: relative;
          align-self: center;
          img {
            height: 28rem;
            width: 19rem;
            border-radius: 1.6rem;
          }
          .img-done,
          .img-load {
            width: 2.5rem;
            position: absolute;
            right: 0.7rem;
            bottom: 1rem;
            background: $secondary-color;
            border-radius: 50%;
            padding: 0.3rem;
            color: $primary-color;
          }
          .img-load {
            animation: load 2s infinite linear;
          }
        }
        .season {
          opacity: v-bind(seasonOp);
        }
      }
    }
    .second-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .multi-select {
      .checkbox {
        width: 100%;
        display: flex;
        gap: 1rem;
        label {
          cursor: pointer;
          position: relative;
          user-select: none;
          &:has(input:checked),
          .active {
            background-color: $primary-color;
            color: $secondary-color;
          }
          input {
            opacity: 0;
            position: absolute;
          }
        }
      }
      .favorite {
        justify-content: space-between;
        label {
          width: 50%;
        }
      }
    }
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      width: 100%;
    }
    input {
      text-align: start;
    }
    label {
      align-self: flex-start;
      color: $secondary-color;
    }
    input,
    select,
    .note-number {
      padding: 0.5rem 1rem;
    }
  }
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
