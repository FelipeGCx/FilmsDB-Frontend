<template>
  <!-- form for adding a new Saga or Category -->
  <div class="first-container">
    <form @submit.prevent="createContent">
      <div class="field">
        <label for="name">{{ title }}:</label>
        <input
          type="text"
          class="input"
          id="name"
          autocomplete="off"
          required
          v-model="item.name"
        />
      </div>
      <div class="img-input">
        <input
          type="file"
          id="image"
          accept="image/svg+xml"
          @change="fileSelected"
        />
        <label for="image">Image</label>
        <label for="image">
          <p v-if="file.name.length > 30">{{ file.name.slice(0, 30) }} ...</p>
          <p v-else>{{ file.name }}</p>
        </label>
      </div>
      <label for="image" class="img-container">
        <img v-if="item.svgImg" :src="item.svgImg" />
        <img v-else />
      </label>
    </form>
    <textarea disabled v-model="item.svg"></textarea>
  </div>
  <div class="second-container">
    <div class="buttons">
      <router-link class="sub-button" to="/">Cancel</router-link>
      <button type="submit" class="main-button">Save</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      item: {
        name: null,
        svg: null,
        svgImg: null,
      },
      file: {
        name: "",
      },
    };
  },
  methods: {
    // get the image that user upload to transform and create blob
    async fileSelected(e) {
      this.file = e.target.files[0];
      this.svgToXml(this.file);
      this.item.svgImg = URL.createObjectURL(e.target.files[0]);
    },
    // parse the svg file to xml
    svgToXml(file) {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        this.item.svg = this.deleteSvgTags(e.target.result);
      };
    },
    // delete the tags that are not necessary in the svg
    deleteSvgTags(string) {
      string = string.replace(/fill="[^>]*?"/g, "");
      string = string.replace(/width="[^>]*?"/g, "");
      string = string.replace(/height="[^>]*?"/g, "");
      string = string.replace(/"/g, "'");
      return string;
    },
    createContent() {
      this.$emit("contentToSave", this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
@include minsize {
  .first-container {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .second-container {
    .buttons {
      justify-content: space-between !important;
      a,
      button {
        width: 100%;
      }
    }
  }
}
@include midsize {
  .first-container {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
}
@include maxsize {
  .first-container {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
}

.first-container {
  display: flex;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 24rem;
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      width: 100%;
      label {
        align-self: flex-start;
        color: $secondary-color;
      }
      input {
        text-align: start;
      }
    }
    $border-radius: 12px;
    .img-container {
      height: 17rem;
      background-color: $base-third-color;
      border-radius: $border-radius;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 80%;
        filter: contrast(0);
      }
    }
  }
  textarea {
    background-color: $base-third-color;
    border-radius: $border-radius;
    color: $secondary-color;
    width: 24rem;
  }
}
.second-container {
  width: 100%;
}
</style>
