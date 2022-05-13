<template>
  <footer>
    <svg class="footer-wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path class="footer-wave-path" d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"></path>
      </svg>
    <div class="footer-main">
      <div class="icons">
        <a  v-for="(item, idx) in contacts" :key="idx" :href="item.link" target="_blank">
          <svg viewBox="0 0 24 24" v-html="item.path"></svg>
        </a>
      </div>
      <span>Created By Felipe Gómez</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Github",
          path: "<title>Github</title><path d='M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M14.5,19.2c0-0.1,0-0.1,0-0.2v-1.7   c0-0.8-0.5-1.8-1.2-2.1c2.5-0.3,3.7-1.5,3.7-3.2c0-0.7-0.3-1.4-0.8-2c0.2-0.6,0.4-1.8-0.1-2.2c-1.1,0-1.8,0.7-2,0.9   c-0.6-0.2-1.2-0.3-1.8-0.3c-0.6,0-1.3,0.1-1.8,0.3c-0.2-0.2-0.8-0.9-2-0.9C8.1,8.2,8.3,9.4,8.5,10c-0.5,0.6-0.8,1.3-0.8,2   c0,1.7,1.2,2.9,3.7,3.2c-0.4,0.2-0.8,0.7-1,1.2c-0.4,0.1-0.8,0.1-1.1,0.1c-0.6,0-0.7-0.1-1-0.5c-0.3-0.4-0.6-0.7-1-0.8   c-0.2,0-0.3,0.1-0.2,0.3C7.7,16,7.7,16.7,8,17.1c0.2,0.4,0.7,0.6,1.2,0.6c0.1,0,0.6,0,0.9,0V19c0,0.1,0,0.3,0.1,0.4   c-3.3-0.8-5.7-3.8-5.7-7.3C4.5,8,7.9,4.6,12,4.6s7.5,3.4,7.5,7.5C19.5,15.4,17.4,18.2,14.5,19.2z'/>",
          link: "https://github.com/FelipeGCx",
        },
        {
          name: "Linkedin",
          path: "<title>Linkedin</title><path d='M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8.5,18H6V9.5h2.5V18z M7.2,8.5   L7.2,8.5C6.5,8.5,6,7.9,6,7.2C6,6.5,6.5,6,7.3,6C8,6,8.5,6.5,8.5,7.2C8.5,7.9,8,8.5,7.2,8.5z M15.5,18v-4.5c0-1.1-0.6-1.8-1.6-1.8   c-0.8,0-1.2,0.5-1.4,1c-0.1,0.2-0.1,0.7-0.1,0.9V18H10V9.5h2.5v1.3c0.4-0.6,0.9-1.3,2.4-1.3c1.8,0,3.1,1.1,3.1,3.6l0,4.9H15.5z'/>",
          link: "https://www.linkedin.com/in/felipegcz/",
        },
        {
          name: "Portfolio",
          path: "<title>Portfolio</title><g><circle cx='12' cy='12' r='2'/><rect x='10.5' y='6.5' width='2.9' height='1.5'/><path d='M12,15c-1.3,0-4,0.7-4,2v0.5C8,17.8,8.2,18,8.5,18h7c0.3,0,0.5-0.2,0.5-0.5V17C16,15.7,13.3,15,12,15z'/><path d='M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19.4,17.5c0,0.8-0.7,1.5-1.5,1.5    H6.1c-0.8,0-1.5-0.7-1.5-1.5l0-8.1c0-0.8,0.6-1.5,1.5-1.5h2.9V6.5C9.1,5.7,9.7,5,10.5,5h2.9c0.8,0,1.5,0.7,1.5,1.5v1.5h2.9    c0.8,0,1.5,0.7,1.5,1.5V17.5z'/></g>",
          link: "https://www.linkedin.com/in/felipegcz/",
        },
        {
          name: "Gmail",
          path: "<title>Gmail</title><path  d='M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M7.9,17.2c0,0.2-0.1,0.3-0.3,0.3   H5.5c-0.4,0-0.8-0.4-0.8-0.8V10l3.2,2.3V17.2z M7.9,11.6L7.9,11.6L4.7,9.2V8.1c0-0.5,0.2-0.9,0.5-1.2C5.7,6.4,6.4,6.4,7,6.8   l0.9,0.6h0l0,0V11.6z M15.5,12.1l-3.3,2.4c-0.1,0.1-0.3,0.1-0.4,0l-3.3-2.4V7.9l3.5,2.6l3.5-2.6V12.1z M19.3,16.7   c0,0.4-0.4,0.8-0.8,0.8h-2.1c-0.2,0-0.3-0.1-0.3-0.3v-4.8l3.2-2.3V16.7z M19.3,9.2l-3.2,2.3v0V7.5l0,0l0.9-0.7   c0.5-0.4,1.3-0.3,1.7,0.1c0.3,0.3,0.5,0.7,0.5,1.2V9.2z'/>",
          link: "https://mail.google.com/mail/?view=cm&fs=1&to=luissfelipegomez@gmail.com&su=Contratar%20Servicios",
          model:
            "https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com",
        },
        {
          name: "Whatsapp",
          path: "<title>Whatsapp</title><g><path d='M12,6c-3.3,0-6,2.7-6,6c0,1.1,0.3,2.1,0.8,3l0.3,0.5L7,16.1l-0.4,1.3l1.5-0.3L8.6,17l0.5,0.3C10,17.7,11,18,12,18    c3.3,0,6-2.7,6-6c0-1.6-0.6-3.1-1.8-4.2C15.1,6.6,13.6,6,12,6z M15.7,14.7c-0.2,0.4-0.9,0.9-1.3,0.9c-0.3,0-0.7,0.2-2.2-0.5    c-1.9-0.7-3.1-2.7-3.2-2.8c-0.1-0.1-0.8-1-0.8-1.9S8.7,9,8.9,8.8C9,8.6,9.2,8.5,9.4,8.5c0.1,0,0.2,0,0.4,0c0.1,0,0.3,0,0.4,0.3    c0.2,0.4,0.5,1.3,0.6,1.4c0,0.1,0.1,0.2,0,0.3c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0.1-0.2,0.2-0.1,0.4    c0.1,0.2,0.5,0.8,1,1.3c0.7,0.6,1.3,0.8,1.5,0.9c0.2,0.1,0.3,0.1,0.4,0c0.1-0.1,0.5-0.5,0.6-0.7c0.1-0.2,0.2-0.2,0.4-0.1    c0.2,0.1,1.1,0.5,1.3,0.6c0.2,0.1,0.3,0.1,0.4,0.2C15.8,13.9,15.8,14.2,15.7,14.7z'/><path d='M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M12,19.5L12,19.5    c-1.3,0-2.5-0.3-3.6-0.9l-3.9,0.9l1-3.8c-0.7-1.1-1-2.4-1-3.7c0-4.1,3.4-7.5,7.5-7.5c2,0,3.9,0.8,5.3,2.2c1.4,1.4,2.2,3.3,2.2,5.3    C19.5,16.1,16.1,19.5,12,19.5z'/></g>",
          link: "https://wa.me/573023521590?text=Buen%20Día,%20estoy%20interesado%20en%20adquirir%20sus%20servicios%20en%20desarrollo%20web",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1024px) {
  .footer-main{
    margin: -6vh 12vw;
    flex-direction: column-reverse;
    align-items: flex-start!important;
  }
  span{
    padding-left: .3rem;
  }
}
@media only screen and (min-width: 750px) and (max-width: 1024px) {
  .footer-main{
    margin: 0 13vw;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 750px) {
  .footer-main{
    margin: 0 12vw;
    justify-content: space-around;
  }
}
@media only screen and (max-width: 550px) {
  .footer-main{
    margin: 0 11vw;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start!important;
  }
  span{
    padding-left: .3rem;
  }
  footer{
    padding-bottom: 1rem;
    height: 17vh !important;

  }
}
footer {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-header);
  margin-top: 2rem;
  bottom: 0;
  left: 0;
  height: 15vh;
  width: 100%;
  z-index: 17;
}
.footer-main{
  display: flex;
  align-items: center;
  height: 100%;
}
.footer-wave-svg {
    background-color: transparent;
    display: block;
    height: 2rem;
    position: relative;
    top: -1px;
    width: 100%;
}
.footer-wave-path {
    fill: var(--bg-body);
}
.icons{
    display: flex;
}
.icons svg{
    fill:var(--color-clear);
    width: 3rem;

}
span{
    color:var(--color-clear);
}
a{
  width: 3rem;
  height: 3rem;
}
</style>