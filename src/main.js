import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// jquery to global variable
import jQuery from "jquery";
window.$ = jQuery;

// font awesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

// clean blog
import "@/assets/css/clean-blog-css.css";
import "@/assets/js/scripts.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
