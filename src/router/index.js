import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import common from '../components/Common'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: common,
        children: [{
            path: '/',
            name: 'home',
            component: Home
        }]
    },
    {
        path: '/goexel',
        component: common,
        children: [{
            path: '',
            name: 'goexel',
            component: () =>
                import ('../views/goexel/Goexcel.vue')
        }]
    },
    {
        path: '/already',
        component: common,
        children: [{
            path: '',
            name: 'already',
            component: () =>
                import ('../views/already/Already.vue')
        }]
    },
    {
        path: '/atag',
        component: common,
        children: [{
            path: '',
            name: 'atag',
            component: () =>
                import ('../views/atag/Atag.vue')
        }]
    },
    {
        path: '/excel',
        component: common,
        children: [{
            path: '',
            name: 'excel',
            component: () =>
                import ('../views/excel/Excel.vue')
        }]
    },
    {
        path: '/sumall',
        component: common,
        children: [{
            path: '',
            name: 'sumall',
            component: () =>
                import ('../views/sumall/Sumall.vue')
        }]
    },
    {
        path: '/upload',
        component: common,
        children: [{
            path: '/',
            name: 'upload',
            component: () =>
                import ('../views/upload/Upload.vue')
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/register/Register.vue')
    },
    {
        path: '/editwork',
        component: common,
        children: [{
            path: '',
            name: 'editwork',
            component: () =>
                import ('../views/editwork/Editwork.vue')
        }]
    },
    {
        path: '/exit',
        component: common,
        children: [{
            path: '',
            name: 'exit',
            component: () =>
                import ('../views/exit/Exit.vue')
        }]
    },
    {
        path: '/notice',
        component: common,
        children: [{
            path: '',
            name: 'notice',
            component: () =>
                import ('../views/notice/Notice.vue')
        }]
    },
    {
        path: '/edit',
        component: common,
        children: [{
            path: '',
            name: 'edit',
            component: () =>
                import ('../views/edit/Edit.vue')
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/register/Register.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let user = localStorage.getItem("user");
    if (to.path === "/login" || to.path === "/register") {
        next();
    } else {
        user ? next() : next("/login");
    }
});

export default router