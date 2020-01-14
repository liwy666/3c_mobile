import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
//import First from './components/First/First';//3c数码管
//import First from './components/New3c/New3c';//新3c数码管
//import First from './components/TMT/TMT'//科技馆
import First from './components/Computer/Computer'//电脑馆
//import First from './components/Kettle/Kettle'//水具馆
//import First from './components/Appliances/Appliances'//家电馆
//import First from './components/NewIphone/NewIphone'//新Iphone
//import First from './components/NewIphoneTwentyFour/NewIphone'//新Iphone24期
//import First from './components/NewIphoneDrop/NewIphoneDrop'//新Iphone降价
//import First from './components/DoubleEleven/DoubleEleven'//双11
//import First from './components/DoubleElevenBurst/DoubleEleven'//6周年庆祝
export default new Router({
    routes: [
        {path: '/', redirect: '/index'},
        {path: '/index', component: First},
    ]
})
