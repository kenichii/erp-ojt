import {Component, Vue} from 'vue-property-decorator';
import {
    ProfileInformation,
    ContactInformation,
    BusinessInformation,
} from '../../../components/Employee/UserInformation/index';

@Component({
    name: 'UserInformation',
    components: {
        ProfileInformation,
        ContactInformation,
        BusinessInformation,
    },
})
export default class UserInformation extends Vue {

}
