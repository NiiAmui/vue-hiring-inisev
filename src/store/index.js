import Vue from 'vue';4
import 'es6-promise/auto'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: '',
        password: '',
        users: [],
        component: 'Login'
    },
    mutations: {
        SET_COMPONENT (state, data) {
            state.component = data
        },
        SET_USERS (state,data) {
            state.users =data
        },
        SET_USER (data) {
            localStorage.setItem('token', JSON.stringify({ username: data.email, password: data.password}))
        }
    },
    actions: {
       async login ({commit},data){
            if (data.email === 'admin' && data.password === '12345') {
                console.log('success')
                commit('SET_USER',data)
                    return 'success'
            }  else {
                console.log('fail')
                return 'error'
            }
        },
        route ({commit},data) {
            commit('SET_COMPONENT',data)
            JSON.stringify(localStorage.setItem('coroute',data))
        },
        async getUsers ({commit} ) {
            const url = 'https://mock.follow.it/profiles.json'
            // let results = []
            try {
                fetch(url).then(res => res.json()).then(data => 
                    commit('SET_USERS', data))

            } catch (e) {
                console.log(e)
            }
        }
    }
})



