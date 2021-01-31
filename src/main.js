import Vue from 'vue';
import App from './App.vue';
import store from './store';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import VueRouter from 'vue-router';
import ProductsList from '@/components/ProductsList.vue';
import LoginForm from '@/components/LoginForm.vue';
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import CreateProduct from "@/components/CreateProduct";
import NotFound from "@/components/NotFound";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import EditProduct from "@/components/EditProduct";
import Logout from "@/components/Logout";
import Navbar from "@/components/Navbar";
import axios from "axios";

require('@/store/subscriber');
axios.defaults.baseURL = 'http://localhost/product-crud-api-laravel/public';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {path: '/login', component: LoginForm},
    {path: '/', component: LoginForm},
    { path: '/list', component: ProductsList,
      // beforeEnter: (to, from, next) =>{
      // return next({
      //   path: '/login'
      // })
      // }
    },
    {path: '/navbar', component: Navbar},
    {path: '/create', component: CreateProduct},
    {path: '/logout', component: Logout},
    {path: '/edit/:id', component: EditProduct},
    {path: '*', component: NotFound},
  ],
  mode: 'history'
});


// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
//   const currentUser = '';
//
//   if (requiresAuth && !currentUser) {
//     localStorage.setItem('redirectPath', to.path);
//     next('/login');
//   } else if (requiresAuth && currentUser) {
//     next();
//   } else {
//     next();
//   }
// });
// this.$auth.redirect();

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

