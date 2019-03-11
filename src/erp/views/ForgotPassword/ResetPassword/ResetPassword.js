import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import ConfirmReset from '@/erp/views/ForgotPassword/ResetPassword/ConfirmReset/ConfirmReset.vue';
let ResetPassword = class ResetPassword extends Vue {
};
ResetPassword = tslib_1.__decorate([
    Component({
        name: 'ResetPassword',
        components: { ConfirmReset },
        data() {
            return {
                isCardModalActive: false,
            };
        },
    })
], ResetPassword);
export default ResetPassword;
//# sourceMappingURL=ResetPassword.js.map