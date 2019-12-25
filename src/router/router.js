import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/components/Layout'
import TaskList from '@/components/TaskList'
import Login from '@/view/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/Layout',
            name: 'Layout',
            component: Layout
        },
        {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/TaskList',
            name: 'TaskList',
            component: TaskList
        }
    ]
})
