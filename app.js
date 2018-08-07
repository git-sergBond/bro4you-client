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
import TOKENS from './TOKENS'
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
        token: localStorage.getItem(TOKENS.AUTHORIZE) || '',
        status: '',
        /*
        statusUI_Autorize: 0, 
        
            1 - не авторизован, вход в 2, 3
            2 - открытый интерфейс регистрации, вход в 1, 4
            3 - открытый интерфейс авторизации, вход в 1, 2 , 4
            4 - авторизован, вход в 1
        */
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
                if(resp.data.status == "OK"){
                   const acessToken = resp.data.token
                  localStorage.setItem(TOKENS.AUTHORIZE, acessToken) // store the token in localstorage
                  axios.defaults.headers.common['Authorization'] = acessToken//применяем токен для каждого следующего запроса
                  commit(API.AUTH_SUCCESS, acessToken)
                  // you have your token, now log in your user :)
                  //dispatch(API.USER_REQUEST)
                }
               
                resolve(resp)
              })
            .catch(err => {
              commit(API.AUTH_ERROR, err)
              localStorage.removeItem(TOKENS.AUTHORIZE) // if the request fails, remove any possible user token if possible
              reject(err)
            })
          })
        },
        [API.AUTH_LOGOUT]: ({commit, dispatch}) => {
            return new Promise((resolve, reject) => {
              commit(API.AUTH_LOGOUT)
              axios({url: 'sessionAPI/end', method: 'POST' })
              .then(resp => {
                if (resp.data.status == "OK") {
                  commit(API.AUTH_ERROR, err)
                  localStorage.removeItem('user-token')
                  //!!!
                  delete axios.defaults.headers.common['Authorization'];//!!!
                  //!!!
                }
                resolve(resp)
              })
            })
        },
        [API.REGISTRATION_REQUEST]: ({commit, dispatch}, user) => {
          return new Promise((resolve, reject) => {
            console.log(user)
            axios({url: 'registerAPI', data: user, method: 'POST' })
              .then(resp => {
                if(resp.data.status == "OK"){
                  const acessToken = resp.data.token
                  localStorage.setItem(TOKENS.AUTHORIZE, acessToken) // store the token in localstorage
                  axios.defaults.headers.common['Authorization'] = acessToken//применяем токен для каждого следующего запроса
                  commit(API.AUTH_SUCCESS, acessToken)
                  // you have your token, now log in your user :)
                  //dispatch(API.USER_REQUEST)
                }
                resolve(resp)
              })
            .catch(err => {
              commit(API.AUTH_ERROR, err)
              localStorage.removeItem(TOKENS.AUTHORIZE) // if the request fails, remove any possible user token if possible
              reject(err)
            })
          });
        }
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
        }
      }
  })
// MAIN
new Vue({
    //el: "#app",
    router,
    store
}).$mount('#app');
Vue.config.devtools = true;