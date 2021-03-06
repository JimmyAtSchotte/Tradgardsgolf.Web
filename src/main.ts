
import Startup from '@/Startup';
import App from './App';

var app = new App(new Startup());
app.run();

// import '@babel/polyfill';
// import Vue from 'vue';
// import './plugins/vuetify';
// import '@/application/registerServiceWorker';
// // import VueGeolocation from 'vue-browser-geolocation';
// import router from '@/application/router';
// import store from '@/application/store/';
// import layouts from '@/presentation/layouts';
// import modules from '@/presentation/modules';

// // Vue.use(VueGeolocation);

// Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   const isAuthorized = store.current.getters.isAuthorized as boolean;
//   const allowAnonymous = !!to.meta.allowAnonymous;

//   if (!isAuthorized && !allowAnonymous) {
//     next({ name: modules.LoginModule.name });
//     return;
//   }

//   if (isAuthorized && allowAnonymous) {
//     next({ name: modules.CourseListModule.name });
//     return;
//   }

//   next();
// });

// new Vue({
//   router,
//   store: store.current,
//   render: (h) => h(layouts.App),
// }).$mount('#app');
