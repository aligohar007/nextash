import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "../router";
const app = createApp(App);

AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

app.use(router);
app.mount("#app");
