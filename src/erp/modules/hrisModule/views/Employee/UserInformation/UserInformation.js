import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { ProfileInformation, ContactInformation, BusinessInformation, } from '../../../components/Employee/UserInformation/index';
let UserInformation = class UserInformation extends Vue {
};
UserInformation = tslib_1.__decorate([
    Component({
        name: 'UserInformation',
        components: {
            ProfileInformation,
            ContactInformation,
            BusinessInformation,
        },
    })
], UserInformation);
export default UserInformation;
//# sourceMappingURL=UserInformation.js.map