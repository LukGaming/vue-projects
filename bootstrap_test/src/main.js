import Vue from 'vue'
import App from './App.vue'



// Import Bootstrap and Bootstrap-Vue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Import Bootstrap-Vue
import BootstrapVue from 'bootstrap-vue';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
