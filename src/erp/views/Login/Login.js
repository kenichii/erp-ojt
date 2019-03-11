import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
let Login = class Login extends Vue {
};
Login = tslib_1.__decorate([
    Component({
        name: 'Login',
        data: () => {
            return {
                username: '',
                password: '',
                invalidCredential: false,
                isLoading: false,
                isFullPage: true,
                serverUnavailable: false,
            };
        },
        computed: {
            ...mapState({
                auth: (state) => state.erp.auth,
            }),
            ...mapGetters([]),
        },
        methods: {
            login() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.$data.isLoading = true;
                        const payload = { 'username': this.$data.username, 'password': this.$data.password };
                        this.$store.dispatch('login', payload)
                            .then(() => {
                            this.$router.push('/selectmodule');
                        })
                            .catch((error) => {
                            this.$data.invalidCredential = true;
                            this.$data.isLoading = false;
                            console.log(JSON.stringify(error));
                            if (error.status === '400')
                                this.$data.serverUnavailable = true;
                        });
                        return;
                    }
                });
            },
        },
    })
], Login);
export default Login;
//# sourceMappingURL=Login.js.map