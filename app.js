import Vue from 'vue';
import VueRouter from 'vue-router';
//
import YmapPlugin from 'vue-yandex-maps';
//
import listPlaceMarks from './pages/listPlaceMarks.vue';
import mainPage from './pages/mainPage.vue';
import registrationPlaceMarks from './pages/registrationPlaceMarks.vue';
//
Vue.use(YmapPlugin);
Vue.use(VueRouter);
//
const routes = [
    { path: '/listPlaceMarks', component: listPlaceMarks },
    { path: '/mainPage', component: mainPage },
    { path: '/registrationPlaceMarks', component: registrationPlaceMarks }
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