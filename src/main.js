import Vue from 'vue'
import App from './App.vue'
import router from './router/router'  // 需要安装路由 npm install --save vue-router

import 'vant/lib/index.css';

/* 
// 单独导入组件
import {
    Button,
    Cell, CellGroup
} from 'vant';

Vue.use(Button)
Vue.use(Cell)
    .use(CellGroup); */


// 导入所有组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);



Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
