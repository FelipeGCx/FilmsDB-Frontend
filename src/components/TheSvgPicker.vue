<template>
  <!-- form for adding a new Saga or Category -->
  <div class="main-add-soc">
    <h1>
      {{ title == "category" ? "Añadir Nueva Categoria" : "Añadir Nueva Saga" }}
    </h1>
    <form @submit.prevent="add">
      <div class="main-form">
        <div class="container-inputs">
          <div class="name-input" v-if="title == 'category'">
            <label for="category">Categoria</label>
            <input
              type="text"
              id="category"
              v-model="name"
              :required="title == 'category' ? true : false"
            />
          </div>
          <div class="name-input" v-else>
            <label for="saga">Saga</label>
            <input
              type="text"
              id="saga"
              v-model="name"
              :required="title == 'saga' ? true : false"
            />
          </div>
          <div class="code-svg">
            <textarea
              disabled
              v-show="!size"
              name="codesvg"
              cols="30"
              rows="10"
              v-model="codeSvg"
            ></textarea>
          </div>
        </div>
        <div class="container-show">
          <div class="container-image">
            <div class="input-image">
              <label for="select-image">Imagen SVG</label>
              <div class="container-selector">
                <input
                  type="file"
                  id="select-image"
                  accept="image/svg+xml"
                  @change="fileSelected"
                />
                <label for="select-image" class="selector">Imagen</label>
                <label for="select-image" class="name-file">
                  <p v-if="this.file.name.length > 30">
                    {{ this.file.name.slice(0, 30) }} ...
                  </p>
                  <p v-else>{{ this.file.name }}</p>
                </label>
              </div>
            </div>
            <label for="select-image" class="cont-image">
              <img v-if="posterSvg" :src="posterSvg" />
              <img v-else />
            </label>
            <div class="code-svg">
              <textarea
                disabled
                v-show="size"
                name="codesvg"
                cols="30"
                rows="10"
                v-model="codeSvg"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <div class="buttons">
          <router-link
            class="sub-button"
            :to="{
              name: 'All',
              params: { page: 1 },
            }"
            >Cancelar</router-link
          >
          <button type="submit" class="main-button">Guardar</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
// import apollo library and componets required
export default {
  name: "AddSoC",
  data() {
    return {
      title: this.$route.params.type,
      name: "",
      file: {
        name: "",
      },
      codeSvg: null,
      posterSvg: null,
      size: false,
    };
  },
  methods: {
    // get the image that user upload to transform and create blob
    async fileSelected(e) {
      this.svgToXml(e.target.files[0]);
      this.file = e.target.files[0];
      this.posterSvg = URL.createObjectURL(this.file);
    },
    // parse the svg file to xml
    svgToXml(svg) {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.codeSvg = event.target.result;
        this.cadeSvg = this.deleteSvgTags(this.codeSvg);
      };
      reader.readAsText(svg);
    },
    // delete the tags that are not necessary in the svg
    deleteSvgTags(string) {
      let svgList = [];
      for (let i = 0; i < string.length; i++) {
        svgList.push(string[i]);
      }
      let svg = svgList.join("");
      let newSvg;
      while (svg.search("<path") != -1) {
        let start = svg.search("<path");
        let end = svg.search("</path>");
        newSvg += svg.slice(start, end);
        svg = svg.replace(/<path[^>]*?>/g, "");
        svg = svg.replace(/<\/path[^>]*?>/g, "");
      }
      newSvg = newSvg.replace(/fill="[^>]*?"/g, "");
      newSvg = newSvg.replace(/undefined/g, "");
      newSvg = newSvg.replace(/<\/svg[^>]*>/g, "");
      newSvg = newSvg.replace(/<\/svg[^>]*/g, "");
      newSvg = newSvg.replace(/<\/g[^>]*>/g, "");
      newSvg = newSvg.replace(/\"/g, "'");
      return newSvg;
    },
    // show the modal if all the fields are filled
    add() {
      if (this.codeSvg) {
        this.modal.visible = true;
      }
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
        this.save();
      } else {
        this.modal.auth = false;
        this.modal.errorText = "No Autorizado";
        this.modal.error = true;
      }
    },
    request(aswr) {
      this.modal.visible = false;
      if (aswr) {
        this.$router.push({
          name: "All",
          params: { page: 1 },
        });
      }
    },
    // call the fucntion add if are saga or category
    save() {
      if (this.title == "category") {
        this.addCategory();
      }
      if (this.title == "saga") {
        this.addSaga();
      }
    },
    // add category
    async addCategory() {
      let category = {
        category: this.toTitleCase(this.name),
        svg: this.codeSvg,
      };
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation CreateCategory($categoryInput: CategoryInput) {
              createCategory(categoryInput: $categoryInput) {
                error
              }
            }
          `,
          variables: {
            categoryInput: category,
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
    // add saga
    async addSaga() {
      let saga = {
        saga: this.toTitleCase(this.name),
        svg: this.codeSvg,
      };
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation CreateSaga($sagaInput: SagaInput) {
              createSaga(sagaInput: $sagaInput) {
                error
              }
            }
          `,
          variables: {
            sagaInput: saga,
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
    // parse to title case
    toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    },
    // watch the size of screen to show svg path in the best position
    setSize(e) {
      this.size = e.target.innerWidth < 760 ? true : false;
    },
  },
  mounted() {
    this.title = this.$route.params.type;
    window.addEventListener("resize", this.setSize);
  },
  unmounted() {
    window.removeEventListener("resize", this.setSize);
  },
};
</script>

<style scoped>
/* momentanious */
.main-add-soc {
  margin: 0 15.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media only screen and (min-width: 750px) and (max-width: 3000px) {
  .main-form {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
  .btn-container {
    flex-direction: row-reverse;
    justify-content: center;
    padding-left: 21.5rem;
  }
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
@media only screen and (max-width: 760px) {
  .main-form {
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }
  .btn-container {
    flex-direction: column;
    justify-content: center;
  }
  .buttons {
    align-self: center;
    width: 100%;
    justify-content: space-around;
  }
  .buttons button,
  a {
    width: 50%;
  }
  .main-form {
    align-items: center;
  }
}
@media only screen and (max-width: 550px) {
  .btn-container {
    flex-direction: column;
    justify-content: center;
  }
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
.main-form {
  display: flex;
  width: 100%;
}
.btn-container {
  display: flex;
  align-items: center;
}
.container-image,
.container-inputs,
.container-show {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  width: 100%;
  min-width: 10rem;
  gap: 1rem;
}
.name-input,
.input-image {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
label {
  color: var(--color-clear);
}
input {
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  width: 100%;
}
.container-selector {
  position: relative;
  display: flex;
  flex-direction: row;
  /* margin: 1rem 0; */
  border-radius: var(--radius);
  border: 0.1rem solid var(--border-input);
  overflow: hidden;
  height: 2.3rem;
  /* width: 17rem; */
  width: 100%;
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
.code-svg input {
  word-wrap: break-word;
}
.buttons {
  margin-top: 2rem;
  display: flex;
  width: 100%;
  gap: 1rem;
}
.buttons {
  display: flex;
  flex-direction: row;
  max-width: 20rem;
  width: 100%;
  min-width: 10rem;
  gap: 1rem;
}
.sub-button {
  text-align: center !important;
}
textarea {
  border: 0.1rem solid var(--border-input);
  border-radius: var(--radius);
  padding: 0.5rem;
  text-align: initial;
  resize: none;
  height: 16rem;
  outline: 0;
  width: 100%;
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
textarea:disabled {
  background-color: var(--color-clear);
}
.cont-image img {
  height: 16rem;
  width: 100%;
  background-color: #c5c5c5;
  border-radius: 1rem;
}
</style>
