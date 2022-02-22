<template>
   <div class="main-container">
        <form @submit.prevent="sendCredentials">
              <div class="container-box">
       
            <input type="text" v-model="person.password">
            <input type="text" v-model="person.key">
            <button type="submit">Enviar</button>
                  </div>
        </form>
   </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
    name:'Credentials',
    data() {
        return {
            person:{
                password:null,
                key:null,
            },
            encrypted: null,
            desencrypted: null,
            desencryptedUser: null,
            access:false,
            user: 'U2FsdGVkX19pvCqAnFmghwcTZJXRvSWXbrmm/UZ4l9M=',
        }
    },
    methods: {
        sendCredentials(){
        this.encrypted = CryptoJS.AES.encrypt(this.person.password, this.person.key);
        this.desencrypted = this.desencrypt(this.encrypted,this.person.key);
        this.desencryptedUser= this.desencrypt(this.user,this.person.key);
        this.access = (this.desencrypted == this.desencryptedUser) ? true:false;
        },
        desencrypt(value,key){
            return CryptoJS.AES.decrypt(value,key).toString(CryptoJS.enc.Utf8);
        }
        }, 
    mounted(){
        

    },
}
</script>

<style scoped>
.main-container{
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
}
span, h1 {
    color:white
}

input{
    border-radius: var(--radius);
  padding: 0.5rem 1rem;
}
form{
    background-color: var(--bg-header);
    border-radius: var(--radius);
    padding: 1em;
}
.container-box{
    padding: 2em;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap:1em;
    min-width:16em;
}
button{
    width: 100%;
  cursor: pointer;
  background-color: var(--bg-main-button);
  padding: 0.7rem 1.3rem;
  border-radius: 0.5rem;
  color: var(--color-clear);
  transition: all 0.3s ease;
  font-weight: 500;
  border: 0.2rem solid transparent;
}
button:hover {
  border: 0.2rem solid var(--bg-main-button);
  background-color: var(--color-clear);
  color: var(--bg-main-button);
}

</style>