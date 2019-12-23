import Vue from 'vue'
import App from './App.vue'
import router from './router/router'  // 需要安装路由 npm install --save vue-router

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


// 导入vant所有组件
import 'vant/lib/index.css';
import Vant from 'vant';
import { Toast } from 'vant';
Vue.use(Vant)
    // .use(VueMeta)
    .use(Toast);



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
