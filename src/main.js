import Vue from 'vue'
import App from './App.vue'
import router from './router/router'  // 需要安装路由 npm install --save vue-router
import store from './store/sotre'

// vue的异步请求
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

// import VueMeta from 'vue-meta'

import 'lib-flexible';

/* 
// 单独导入vant组件
import {
    Button,
    Cell, CellGroup
} from 'vant';

Vue.use(Button)
Vue.use(Cell)
.use(CellGroup); */


// 导入vant所有组件和样式
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
// .use(VueMeta)

// vue的状态管理
import Vuex from "vuex"
Vue.use(Vuex)

// vant轻提示
import { Toast } from 'vant';
Vue.use(Toast);

Vue.config.productionTip = false

new Vue({
    router,
    store, // 通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中
    // 如果不在这注册，那么每次需要在使用 state 的组件中频繁地导入
    render: h => h(App),
}).$mount('#app')
