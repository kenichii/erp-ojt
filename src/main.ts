import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Buefy from 'buefy';
import VueSweetalert2 from 'vue-sweetalert2';
import 'buefy/dist/buefy.css';
import './stylesheets/main.scss';
// @ts-ignore
import VueMoment from 'vue-moment';
import moment from 'moment';
import VeeValidate from 'vee-validate';


Vue.use(VueMoment, {moment});
Vue.use(Buefy);
Vue.use(VeeValidate);

const options = {
    confirmButtonColor: '#12CDD3',
    cancelButtonColor: '#aaa',
};
Vue.use(VueSweetalert2, options);

Vue.config.productionTip = false;

Vue.use(VueI18n);

const messages = {
    en: {
        message: {
            hello: 'hello world',
        },
    },
    ja: {
        message: {
            hello: 'こんにちは、世界',
        },
    },
};
const i18n = new VueI18n({
    locale: 'ja', // set locale
    messages,
});

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');

