import { createApp } from "vue";
import App from "./App.vue";
import store from "~/store";
import router from "./routes";
import "./main.css";
import "~/routes/guards";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
