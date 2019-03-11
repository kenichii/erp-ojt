import {Component, Vue} from 'vue-property-decorator';
import AdminLeaveManagement from '../../../components/Admin/AdminLeaveManagement/LeaveManagement/LeaveManagement.vue';
@Component({
    name: 'LeaveManagement',
    components: {
        AdminLeaveManagement,
    },
})
export default class LeaveManagement extends Vue {}
