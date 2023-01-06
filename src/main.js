import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// import {
//   faHome,
//   faUser,
//   faUserPlus,
//   faSignInAlt,
//   faSignOutAlt
// } from '@fortawesome/free-solid-svg-icons';
// import { router } from './router';
import  {router} from './router';
import store from './store';
import Element from 'element-ui'


// library.add(fab, fas, far, faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);
library.add(fab, fas, far);

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VeeValidate);
Vue.use(Element);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');