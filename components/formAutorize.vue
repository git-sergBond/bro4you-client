<template>
     <div>
        <form class="signin" @submit.prevent="signin">
            <h1>Авторизация</h1>
            <label>Login</label>
            <input required v-model="login" type="text" placeholder="Snoopy"/>
            <br><label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <br><button type="submit">Login</button>
            <br><button >forgot password</button>
            <br><button >forgot login</button>
        </form>
        <button @click.prevent="logout">Logout</button>
        <form class="signup" @submit.prevent="signup">
            <h1>Регистрация</h1>
            <label>First name</label>
            <input required v-model="firstname" type="text" placeholder="first name"/>
            <br><label>Last name</label>
            <input required v-model="lastname" type="text" placeholder="last name"/>
            <br><label>Male</label>
            <input type="checkbox" v-model="male">
            <label> {{male ? "boy" : "girl"}}</label>
            <br><label>Login</label>
            <input required v-model="login" type="text" placeholder="Snoopy"/>
            <br><label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
            <br><label>E-mail</label>
            <input required v-model="email" type="text" placeholder="email@ru"/>
            <br><label>Phone</label>
            <input required v-model="phone" type="text" placeholder="+7 (___) ___ __ __"/>
            <br><button type="submit">register my</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';//+
import API from '../API'
export default {
    data: function(){
        return {
            login: 'vacya',
            password: '12345',
            email: "weqweqwe@yandex.ru",
            phone: "123",
            firstname: "first",
            lastname: "last",
            male: true
        }
    },
    methods: {
        signin: function () {
            const { login, password } = this
            this.$store.dispatch(API.AUTH_REQUEST, { login, password })
            /*
            .then(() => {
                this.$router.push('/p2')
            })*/
        },
        logout: function () {
            this.$store.dispatch(API.AUTH_LOGOUT)
            /*
            .then(() => {
                this.$router.push('/p2')
            })*/
        },
        signup: function() {
            const { login, password,
            email, phone, firstname,
            lastname, male} = this
            this.$store.dispatch(API.REGISTRATION_REQUEST, 
            { login, password, email, phone, firstname,lastname, male}).then(() => {
                this.$router.push('/personalCabinet')
            })
        }
    }
}
</script>
<style lang="sass" scoped>

</style>
