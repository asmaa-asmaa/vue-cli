import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";
const emitter = mitt();

const vueApp = createApp(App);
vueApp.provide("emitter", emitter).use(router).mount("#app");
vueApp.directive("maxSize", (el, order) => {
  // console.log(el), console.log(order), console.log(order.value);
  el.style.fontSize = order.value + "px";
});

vueApp.directive("changeColor", (el, order) => {
  el.style.color = order.value;
});
