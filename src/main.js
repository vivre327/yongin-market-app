import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/style.scss"; // SCSS 파일 import
import "./assets/scss/guide.scss"; // SCSS 파일 import
import "./registerServiceWorker";

const app = createApp(App);

app.use(router);
app.mount("#app");
