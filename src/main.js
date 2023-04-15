import { createApp } from 'vue'
import App from './App.vue'
import TDesign from 'tdesign-vue-next';
import router from './router'
import store from './store'
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App)

app.use(store)
  .use(router)
  .use(TDesign)
  .mount('#app');