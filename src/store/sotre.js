import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const store = new Vuex.Store({
export default new Vuex.Store({
    state: {
        count: 0,
        token: "" || localStorage.getItem('token')
    },
    getters: {
        token: (state) => state.token
    },
    mutations: {
        increment (state) {
            state.count++
        },
        handlerToekn: (state, token) => {
            state.token = token;
            // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
            localStorage.setItem('token', token);
        }
    },
    actions: {
        // mountations只能执行同步的，action可以执行异步的
    }
})

/* store.commit('increment')
toekn = this.$store.getters.token
{{$store.getters.token}}
console.log(store.state.count)  */
