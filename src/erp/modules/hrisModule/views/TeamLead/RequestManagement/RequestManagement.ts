import {Component, Vue} from 'vue-property-decorator';
import RequestTableList from '../../../components/TeamLead/RequestManagement/RequestTableList/RequesTableList.vue';
import AdminLeaveManagement from "../../../components/Admin/AdminLeaveManagement/AdminLeaveManagement.vue";

@Component({
    name: 'LeaveRequest',
    components: {
        RequestTableList,
        AdminLeaveManagement,
    },
})
export default class RequestManagement extends Vue {
}
