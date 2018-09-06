<template>
     <div v-show="isactive" class="win-authorise">
        <img src="images/backgrouns/Rectangle 60.png" class="background">
        <div class="content">
        <div class="tabs">
            <p class="active">Войти</p>
            <div class="separator"></div>
            <p>Регистрация</p>
        </div>
        <p class="btn-close">Закрыть X</p>
        <form v-show="numtab==0" class="signin" @submit.prevent="signin">
            <div class="text-input">
                <img src="images/icons/user-silhouette.png">
                <input required v-model="login" type="text" placeholder="Email или Телефон"/>
            </div>
            <div class="text-input">
                <img src="images/icons/key-silhouette-security-tool-interface-symbol-of-password.png">
                <input required v-model="password" type="password" placeholder="Пароль"/>
            </div>
            <div class="forgot-pass">
                <input type="checkbox">
                <p>Запомнить меня</p>
            </div>
            <div class="enter-buttons">
                <button type="submit">Войти</button>
                <p>Забыли пароль?</p>
            </div>
            <div class="social-net">
                <p>Вход через социальные сети</p>
                <div class="soc-net-icons">
                    <img src="images/icons/vk.png">
                    <img src="images/icons/instagram.png">
                    <img src="images/icons/twitter.png">
                    <img src="images/icons/google-plus.png">
                    <img src="images/icons/facebook.png">
                    <img src="images/icons/pinterest.png">
                </div>
            </div>
        </form>
        <!--button @click.prevent="logout">Выход</button-->
        <form v-show="numtab==1" class="signup" @submit.prevent="signup">
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
            isactive: false,
            numtab: 0
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
<style scoped>
.win-authorise{
    --w: 600px;
    --h: 500px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 100px;
    left: 300px;
}
.background{
    width: var(--w);
    height: var(--h);
}
.content{
    position: absolute;
    top: 0;
    left: 0;
    width: var(--w);
    height: var(--h);
}
.tabs{
    --tab-h: 40px;
    display: flex;
    justify-content: space-between;
    width: var(--w);
    height: var(--tab-h);
}
.tabs p {
    width: calc(var(--w)/2 - 21px);
    text-align: center;
}
.tabs .active{
    border-bottom: 1px solid black;
    height: 30px;
    font-weight: 900;
}
.tabs .separator{
    position: absolute;
    width: 1px;
    height: 64px;
    transform: rotate(45deg);
    left: calc(var(--w)/2);
    background-color: black;
    padding: 0;
    margin: 0;
    top: -8px;
}
.btn-close{
    position: absolute;
    bottom: 0;
    right: 20px;
}
.signin{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
