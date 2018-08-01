<template>
     <div>
        <form class="login" @submit.prevent="signin">
            <h1>Sign in</h1>
            <label>User name</label>
            <input required v-model="login" type="text" placeholder="Snoopy"/>
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="Password"/>
        <hr/>
            <button type="submit">Login</button>
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
            password: '12345'
        }
    },
    methods: {
        signin: function () {
            const { login, password } = this
            this.$store.dispatch(API.AUTH_REQUEST, { login, password })
            .then(() => {
                this.$router.push('/')
            })
        },
        logout: function () {
            this.$store.dispatch(API.AUTH_LOGOUT)
            .then(() => {
                this.$router.push('/p2')
            })
        }
    }
}
</script>
<style lang="sass" scoped>

</style>
