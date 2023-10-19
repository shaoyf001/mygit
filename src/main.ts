import { createApp } from "vue";
import router from "./router";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";

createApp(App).use(Antd).use(router).mount("#app");

// import Vue from "vue";
// import Antd from "ant-design-vue";
// import App from "./App.vue";
// import "ant-design-vue/dist/reset.css";
//
// Vue.use(Antd);
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });
