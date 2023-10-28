import Vue from 'vue';
import VueRouter from 'vue-router';

import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

import {validationObserver, ValidationProvider , extend} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach(rule => extend(rule, rules[rule]));
import App from './App';

Vue.component('ValidationObserver', ValidationProvider);
Vue.component('ValidationProviser', validationObserver);

Vue.use(VueRouter);


import router from './router/index';
new Vue ({
    el:"#app",
    router,
    render: h=> h(App)
})