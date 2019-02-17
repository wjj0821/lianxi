import "amfe-flexible";
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Cube from "cube-ui";
import App from "view/App";
import router from "router";
import store from "./store"
// import header from "comp/header";

import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";

Vue.use(Cube);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
