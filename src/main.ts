import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import "./styles/main.scss";
import "./styles/media-queries.scss";

createApp(App)
.use(router)
.mount('#app')