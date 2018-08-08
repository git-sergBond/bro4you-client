<template>
     <div>
        <form class="signin" @submit.prevent="signin">
            <h1>Авторизация</h1>
            <label>Email или Телефон</label>
            <input required v-model="login" type="text" placeholder="Snoopy"/>
            <br><label>Пароль</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <br><button >Забыли пароль?</button><button >Или забыли логин?</button>
            <br><button type="submit">Вход</button>
        </form>
        <button @click.prevent="logout">Выход</button>
        <form class="signup" @submit.prevent="signup">
            <h1>Регистрация</h1>
            <br><label>Email или Телефон</label>
            <input required v-model="login" type="text" placeholder="Snoopy"/>
            <br><label>Придумайте пароль</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <br><label>Повторите пароль</label>
            <input required v-model="passwordVerif" type="password" placeholder="Password"/>
            <br><button>FaceBook</button><button>Vk</button><button>Ok</button><button>Google</button><button>Yandex</button>
            <br><button type="submit">Зарегистрироваться</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';//+
import API from '../API'
export default {
    data: function(){
        return {
            login: 'agggr@mail.ru',
            password: '1234',
            passwordVerif: '',
        }
    },
    methods: {
        signin: function () {
            const { login, password} = this
            this.$store.dispatch(API.AUTH_REQUEST, { login, password })
            .then((resp) => {
                if(resp.data.status == "OK") 
                    alert("Вы успешно авторизовались")
                else 
                    alert("ОШИБКА: Авторизация не пройдена")
            })
            .catch(()=>{
                 alert("ОШИБКА: Проблема в соединении с сервером")
            })
        },
        logout: function () {
            alert("Выход")
            this.$store.dispatch(API.AUTH_LOGOUT)
        },
        signup: function() {
            const { login, password, passwordVerif} = this
            //проверка сходства паролей
            let validPass = true
            if(password.length == passwordVerif.length){
                for (let i = 0; i < password.length; i++) {
                    const a = password[i];
                    const b = passwordVerif[i];
                    if(a != b) {
                        validPass = false;
                        break;
                    }
                }
            } else {
                validPass = false;
            }
            if(validPass){
                this.$store.dispatch(API.REGISTRATION_REQUEST, {login, password} /*{ login, password, email, phone, firstname,lastname, male}*/
                ).then((resp) => {
                    if(resp.data.status == "OK") 
                        alert("Зайдите в свою почту для подтверждения")
                    else 
                        alert("ОШИБКА: Такой логин/пароль уже занят")
                }).catch(()=>{
                    alert("ОШИБКА: Что-то пощло не так")
                })
            }else{
                alert("ОШИБКА: Пароли не совпадают")
            }
        }
    }
}
</script>
<style lang="sass" scoped>

</style>
