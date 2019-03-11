import {Component, Vue} from 'vue-property-decorator';
import LeavesCount from '../../../Employee/EmployeeLeaveManagement/LeavesCount/LeavesCount.vue';


@Component({
        name: 'LeaveDetailsModal',
        props: [
            'selected',
        ],
        components: {
            LeavesCount
        },
    },
)
export default class LeaveDetailsModal extends Vue {
}
