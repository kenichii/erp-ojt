import {Component, Vue} from 'vue-property-decorator';
import ConfirmReset from '@/erp/views/ForgotPassword/ResetPassword/ConfirmReset/ConfirmReset.vue';

@Component({
    name: 'ResetPassword',
    components: {ConfirmReset},
    data() {
        return {
            isCardModalActive: false,
        };
    },
})
export default class ResetPassword extends Vue {}
