import Vue from 'vue';
import VueRouter from 'vue-router';
import YmapPlugin from 'vue-yandex-maps';
import Vuex from 'vuex';
import axios from 'axios';//+
Vue.use(YmapPlugin);
Vue.use(VueRouter);
Vue.use(Vuex);
//
//
import listPlaceMarks from './pages/listPlaceMarks.vue';
import mainPage from './pages/mainPage.vue';
import registrationPlaceMarks from './pages/registrationPlaceMarks.vue';
import API from './API'
// ROUTER
const routes = [
    { path: '/p1', component: listPlaceMarks },
    { path: '/p2', component: mainPage },
    { path: '/p3', component: registrationPlaceMarks }
]
const router = new VueRouter({
    routes
});
// VUEX
const store = new Vuex.Store({
    
    state: {
        token: localStorage.getItem('user-token') || '',
        status: '',
    },
    getters: {
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,
    },
    actions: {
        [API.AUTH_REQUEST]: ({commit, dispatch}, user) => {
          return new Promise((resolve, reject) => { // The Promise used for router redirect in login
            commit(API.AUTH_REQUEST)
            axios({url: 'sessionAPI', data: user, method: 'POST' })
              .then(resp => {
                const token = resp.data.token
                localStorage.setItem('user-token', token) // store the token in localstorage
                commit(API.AUTH_SUCCESS, token)
                // you have your token, now log in your user :)
                dispatch(API.USER_REQUEST)
                resolve(resp)
              })
            .catch(err => {
              commit(API.AUTH_ERROR, err)
              localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
              reject(err)
            })
          })
        },/*
        [AUTH_LOGOUT]: ({commit, dispatch}) => {
            return new Promise((resolve, reject) => {
              commit(AUTH_LOGOUT)
              localStorage.removeItem('user-token') // clear your user's token from localstorage
              resolve()
            })
        }*/
      },
      mutations: {
        [API.AUTH_REQUEST]: (state) => {
          state.status = 'loading'
        },
        [API.AUTH_SUCCESS]: (state, token) => {
          state.status = 'success'
          state.token = token
        },
        [API.AUTH_ERROR]: (state) => {
          state.status = 'error'
        },
      }
  })
// MAIN
new Vue({
    //el: "#app",
    router,
    store
}).$mount('#app');
Vue.config.devtools = true;