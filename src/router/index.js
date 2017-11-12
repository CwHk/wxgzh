import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from "@/components/home" //使用页面
import Login from "@/components/login" //使用页面
import Questions from "@/components/questions" //使用页面
import Mypersonal from "@/components/mypersonal" //使用页面
import Mysleep from "@/components/mysleep" //使用页面
import Detail from "@/components/detail" //使用页面
import ConsumeDetail from "@/components/consumeDetail" //使用页面
import GuaranTee from "@/components/guaranTee" //保修
import SleepOver from "@/components/sleepover" //保修
import Balance from "@/components/balance"
import ReportingFailure from "@/components/reporting-failure"
import Recharge from "@/components/recharge"
import Foregift from "@/components/foregift"
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            meta: {
                title: '首页'
            },
            component: Home
        },
        {
            path: '/Login',
            name: 'Login',
            meta: {
                title: '登录'
            },
            component: Login
        },
        {
            path: '/Questions',
            name: 'Questions',
            meta: {
                title: '积分兑换'
            },
            component: Questions
        },
        {
            path: '/Mypersonal',
            name: 'Mypersonal',
            meta: {
                title: '个人中心'
            },
            component: Mypersonal
        },
        {
            path: '/Mysleep',
            name: 'Mysleep',
            meta: {
                title: '我的睡眠'
            },
            component: Mysleep
        },
        {
            path: '/Detail',
            name: 'Detail',
            meta: {
                title: '充值明细'
            },
            component: Detail
        },
        {
            path: '/consumeDetail',
            name: 'consumeDetail',
            meta: {
                title: '消费明细'
            },
            component: ConsumeDetail
        },
        {
            path: '/guaranTee',
            name: 'guaranTee',
            meta: {
                title: '报修'
            },
            component: GuaranTee
        },
        {
            path: '/sleepover',
            name: 'sleepOver',
            meta: {
                title: '极品套装'
            },
            component: SleepOver
        },
        {
            path: '/balance',
            name: 'balance',
            meta: {
                title: '我的余额'
            },
            component: Balance
        },
        {
            path: '/reporting-failure',
            name: 'reportingFailure',
            meta: {
                title: '积分列表'
            },
            component: ReportingFailure
        },
        {
            path: '/recharge',
            name: 'Recharge',
            meta: {
                title: '兑换记录'
            },
            component: Recharge
        },
        {
            path: '/foregift',
            name: 'Foregift',
            meta: {
                title: '押金'
            },
            component: Foregift
        },

    ]
})