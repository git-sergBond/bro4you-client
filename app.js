import Vue from 'vue';
import VueRouter from 'vue-router';
import YmapPlugin from 'vue-yandex-maps';
import Vuex from 'vuex';
Vue.use(YmapPlugin);
Vue.use(VueRouter);
Vue.use(Vuex);
//
//
import listPlaceMarks from './pages/listPlaceMarks.vue';
import mainPage from './pages/mainPage.vue';
import registrationPlaceMarks from './pages/registrationPlaceMarks.vue';
//
const routes = [
    { path: '/p1', component: listPlaceMarks },
    { path: '/p2', component: mainPage },
    { path: '/p3', component: registrationPlaceMarks }
]
//
const router = new VueRouter({
    routes
});
//
new Vue({
    //el: "#app",
    router
}).$mount('#app');
Vue.config.devtools = true;