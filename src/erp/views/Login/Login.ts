import {Component, Vue} from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
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
            auth: (state: any) => state.erp.auth,
        }),
        ...mapGetters([
        ]),
    },
    methods: {
        login() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$data.isLoading = true;
                    const payload = {'username': this.$data.username, 'password': this.$data.password};
                    this.$store.dispatch( 'login', payload)
                        .then(() => {
                            this.$router.push('/selectmodule');
                        })
                        .catch((error) => {
                            this.$data.invalidCredential = true;
                            this.$data.isLoading = false;
                            console.log(JSON.stringify(error));
                            if(error.status === '400') this.$data.serverUnavailable = true;

                        });
                    return;
                }
            });
        },
    },

})

export default class Login extends Vue {
}
