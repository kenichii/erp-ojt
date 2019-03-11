import {Component, Vue} from 'vue-property-decorator';
import {
    EducationalBackground,
    EmploymentHistory,
    FamilyBackground,
    MedicalIds,
    Skills,
} from '../../../components/Employee/EmploymeeInformation/index';
import ContactInformation from '../../../components/Employee/UserInformation/ContactInformation/ContactInformation.vue';
import ProfileInformation from '../../../components/Employee/UserInformation/profileInformation/profileInformation.vue';

@Component({
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
export default class EmployeeInformation extends Vue {

}
