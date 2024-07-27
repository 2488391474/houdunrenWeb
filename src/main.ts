import { createApp } from "vue";
import type {Component} from 'vue'
import App from "./App.vue";
import router, { setupRouter } from "@/router";
import setuPlugins from "@/plugins/index";
import '@/styles/global.scss'

async function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  await router.isReady();
  setuPlugins(app);
  app.mount("#app");
}

bootstrap();
