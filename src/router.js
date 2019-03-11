import Vue from 'vue';
import Router from 'vue-router';
import { Login, ForgotPassword, ResetPassword, StyleGuide, SelectModule } from './erp/views/index';
import HrisRoutes from './erp/modules/hrisModule/hris-router';
import NotFound from './erp/views/notfound/notfound';
import store from '@/store';
Vue.use(Router);
function requireAuth(to, from, next) {
    if (!store.getters.isLoggedIn) {
        next('login');
    }
    else {
        next();
    }
}
export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/ForgotPassword',
            name: 'ForgotPassword',
            component: ForgotPassword,
        },
        {
            path: '/ForgotPassword/ResetPassword',
            name: 'ResetPassword',
            component: ResetPassword,
        },
        {
            path: '/StyleGuide',
            name: 'StyleGuide',
            component: StyleGuide,
        },
        {
            path: '/SelectModule',
            name: 'SelectModule',
            component: SelectModule,
        },
        {
            path: '*',
            component: NotFound,
        },
    ].concat(HrisRoutes),
});
//# sourceMappingURL=router.js.map