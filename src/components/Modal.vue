<template>
  <div class="main-container">
    <div class="box | question" v-show="question">
      <div class="container-box">
        <div class="text">{{ questionText }}</div>
        <div class="buttons">
          <button
            class="sub-button"
            @click="this.$emit('questionRequest', false)"
          >
            Cancelar
          </button>
          <button
            class="main-button"
            @click="this.$emit('questionRequest', true)"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
    <div class="box | load" v-show="load">
      <div class="container-box">
        <div class="loading">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.94 75.83">
            <g id="Capa_2" data-name="Capa 2">
              <path
                d="M88.19,30l-8,12.32-7.28,0a.6.6,0,0,1-.38-.13L80.46,30H72.14l-8,12.32-7.28,0a.65.65,0,0,1-.38-.13L64.4,30H56.08l-8,12.32-7.28,0a.6.6,0,0,1-.38-.13L48.35,30H40L32,42.35l-7.28,0a.65.65,0,0,1-.38-.13L32.29,30H24L16,42.35l-7.28,0a.6.6,0,0,1-.38-.13L16.24,30h-8V73.51a8.5,8.5,0,0,0,8.5,8.5H79.88a8.51,8.51,0,0,0,8.5-8.5V30Z"
                transform="translate(-7.44 -6.18)"
              />
              <path
                d="M56.8,42.37l7.28,0,8-12.32H64.35L56.42,42.24A.62.62,0,0,0,56.8,42.37Z"
                transform="translate(-7.44 -6.18)"
                fill="#fff"
              />
              <path
                d="M72.85,42.37l7.29,0,8-12.32H80.41L72.47,42.24A.65.65,0,0,0,72.85,42.37Z"
                transform="translate(-7.44 -6.18)"
                fill="#fff"
              />
              <path
                d="M40.74,42.37l7.29,0L56,30H48.3L40.36,42.24A.65.65,0,0,0,40.74,42.37Z"
                transform="translate(-7.44 -6.18)"
                fill="#fff"
              />
              <path
                d="M24.69,42.37l7.28,0L40,30H32.24L24.31,42.24A.62.62,0,0,0,24.69,42.37Z"
                transform="translate(-7.44 -6.18)"
                fill="#fff"
              />
              <path
                d="M8.63,42.37l7.29,0,8-12.32H16.19L8.25,42.24A.65.65,0,0,0,8.63,42.37Z"
                transform="translate(-7.44 -6.18)"
                fill="#fff"
              />
              <path
                d="M40,50.5v17a1,1,0,0,0,1.54.89l14.6-8.48a1,1,0,0,0,0-1.78l-14.6-8.48A1,1,0,0,0,40,50.5Z"
                transform="translate(-7.44 -6.18)"
                fill="#fff"
              />
            </g>
            <g id="Capa_3" data-name="Capa 3">
              <polygon
                points="45.99 3.96 37.68 5.3 47.66 16.23 55.96 14.89 45.99 3.96"
              />
              <polygon
                points="31.69 18.81 40 17.47 30.03 6.54 21.72 7.88 31.69 18.81"
              />
              <path
                d="M21.51,15.29l-7.35,1.19a8,8,0,0,0-6.62,9.17l.59,3.68a.65.65,0,0,0,.75.54l22.6-3.65Z"
                transform="translate(-7.44 -6.18)"
              />
              <polygon
                points="61.95 1.38 53.64 2.73 63.62 13.66 71.92 12.31 61.95 1.38"
              />
              <path
                d="M86.9,17.13a.62.62,0,0,0,.19-.55L86.5,12.9a8,8,0,0,0-9.18-6.62l-.28,0Z"
                transform="translate(-7.44 -6.18)"
              />
              <circle cx="7.57" cy="16.82" r="2.96" fill="#fff" />
              <polygon
                points="14.13 9.12 24.1 20.05 31.75 18.81 21.78 7.88 14.13 9.12"
                fill="#fff"
              />
              <polygon
                points="30.09 6.54 40.06 17.47 47.71 16.23 37.74 5.3 30.09 6.54"
                fill="#fff"
              />
              <polygon
                points="46.05 3.96 56.02 14.89 63.67 13.65 53.7 2.73 46.05 3.96"
                fill="#fff"
              />
              <path
                d="M87,17.13,77.1,6.32,69.44,7.56l10,10.93,7.19-1.16A.62.62,0,0,0,87,17.13Z"
                transform="translate(-7.44 -6.18)"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="box | auth" v-show="auth">
      <form @submit.prevent="sendCredentials">
        <div class="container-box">
          <input
            type="text"
            v-model="person.password"
            placeholder="Password"
            required
          />
          <input
            type="text"
            v-model="person.key"
            placeholder="Keyword"
            required
          />
          <button type="submit" class="main-button | auth-button">Enviar</button>
        </div>
      </form>
    </div>
    <div class="box | error" v-show="error">
      <div class="container-box">
        <div class="text">{{ errorText }}</div>
        <div class="buttons">
          <button class="main-button" @click="this.$emit('request', false)">
            Aceptar
          </button>
        </div>
      </div>
    </div>
    <div class="box | success" v-show="success">
      <div class="container-box">
        <div class="text">{{ successText }}</div>
        <div class="buttons">
          <button class="main-button" @click="this.$emit('request', true)">
            Aceptar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import cypto library and component neccesary
import CryptoJS from "crypto-js";
import Loading from "@/components/Loading.vue";

export default {
  name: "Modal",
  props: {
    questionText: {
      type: String,
      default: "¿Agregar Registro?",
    },
    errorText: {
      type: String,
      default: "Algo Salio Mal",
    },
    successText: {
      type: String,
      default: "Hecho",
    },
    question: { type: Boolean, default: true },
    error: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    auth: { type: Boolean, default: false },
    load: { type: Boolean, default: false },
  },
  components: {
    Loading,
  },
  data() {
    return {
      person: {
        password: null,
        key: null,
      },
      encrypted: null,
      desencrypted: null,
      desencryptedUser: null,
      access: false,
      user: "U2FsdGVkX19pvCqAnFmghwcTZJXRvSWXbrmm/UZ4l9M=",
    };
  },
  methods: {
    // compare the credentials encrypted
    sendCredentials() {
      this.encrypted = CryptoJS.AES.encrypt(
        this.person.password,
        this.person.key
      );
      this.desencrypted = this.desencrypt(this.encrypted, this.person.key);
      this.desencryptedUser = this.desencrypt(this.user, this.person.key);
      this.access = this.desencrypted == this.desencryptedUser ? true : false;
      this.$emit("authRequest", this.access);
    },
    desencrypt(value, key) {
      return CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
    },
  },
};
</script>

<style scoped>
.main-container {
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  z-index: 10;
}
.box {
  background-color: var(--bg-header);
  border-radius: var(--radius);
  padding: 1em;
}
.container-box {
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  min-width: 16em;
}
.text {
  color: var(--color-clear);
  font-weight: 600;
  font-size: 2em;
}
.buttons {
  display: flex;
  gap: 1em;
}
.buttons button {
  font-size: 1.2em !important;
}
input {
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
}
form {
  background-color: var(--bg-header);
  border-radius: var(--radius);
  padding: 1em;
}
.container-box {
  padding: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  min-width: 16em;
}
.auth-button{
  width: 100%;
  font-size: 1.2em !important;
}
.loading {
  animation: rotation 2s ease-in-out 0s infinite normal;
}
svg {
  fill: var(--bg-loading);
  width: 5rem;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>