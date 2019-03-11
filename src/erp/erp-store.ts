import axios from 'axios';
import decode from 'jwt-decode';


export const erpStore = {
    state: {
        auth: {
            isLoggedIn: false,
            identity: {
                apiUrl: 'http://localhost:61515',
                scope: 'mvp.hris.api openid',
                client_id: '5CD851F77FAD231B',
                client_secret: 'VPgfUSXWwbHl0kWH4dAMK6ux8keLxVin',
                grant_type: 'password',
                token: '',
            },
        },
    },
    getters: {
        isLoggedIn: () => {
            if (erpStore.state.auth.identity.token !== '') {
                if ( (<any> decode(erpStore.state.auth.identity.token)).exp > new Date().getUTCMilliseconds()) {
                    return true;
                }
            }
            return false;
        },
    },
    mutations: {
        SET_IDENTITY_TOKEN(state: any, token: string) {
            state.auth.identity.token = token;
        },
        CLEAR_IDENTITY_TOKEN(state: any) {
            state.auth.identity.token = '';
        },
    },
    actions: {
        async login(context: any, credential: any) {
            context.commit('CLEAR_IDENTITY_TOKEN');
            return new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append('username', credential.username);
                formData.append('password', credential.password);
                formData.append('client_id', erpStore.state.auth.identity.client_id);
                formData.append('client_secret', erpStore.state.auth.identity.client_secret);
                formData.append('scope', erpStore.state.auth.identity.scope);
                formData.append('grant_type', erpStore.state.auth.identity.grant_type);
                axios
                    .post(erpStore.state.auth.identity.apiUrl + '/connect/token', formData)
                    .then((res) => {
                        context.commit('SET_IDENTITY_TOKEN', res.data.access_token);
                        resolve();
                    }, (error) => {
                        reject(error);
                    });
            });
        },
        logout(context: any) {
            context.commit('CLEAR_IDENTITY_TOKEN');
        },
    },
};

export default erpStore;




