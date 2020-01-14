import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

//定义全局变量
import {post, fetch, patch, put, imgUpload} from './http'

Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$imgUpload = imgUpload;


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper);


//lazyload
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);

//vant
import {Icon} from 'vant';
import {Tabbar, TabbarItem} from 'vant';
import {Search} from 'vant';
import {NavBar} from 'vant';
import {Sticky} from 'vant';

Vue.component(Icon.name, Icon);
Vue.component(Search.name, Search);
Vue.component(NavBar.name, NavBar);
Vue.component(Sticky.name, Sticky);
Vue.use(Tabbar).use(TabbarItem);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
