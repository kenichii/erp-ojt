import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { EducationalBackground, EmploymentHistory, FamilyBackground, MedicalIds, Skills, } from '../../../components/Employee/EmploymeeInformation/index';
import ContactInformation from '../../../components/Employee/UserInformation/ContactInformation/ContactInformation.vue';
import ProfileInformation from '../../../components/Employee/UserInformation/profileInformation/profileInformation.vue';
let EmployeeInformation = class EmployeeInformation extends Vue {
};
EmployeeInformation = tslib_1.__decorate([
    Component({
        name: 'EmployeeInformation',
        components: {
            ContactInformation,
            ProfileInformation,
            EducationalBackground,
            EmploymentHistory,
            FamilyBackground,
            MedicalIds,
            Skills,
        },
    })
], EmployeeInformation);
export default EmployeeInformation;
//# sourceMappingURL=EmployeeInformation.js.map