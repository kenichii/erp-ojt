import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import RequestTableList from '../../../components/TeamLead/RequestManagement/RequestTableList/RequesTableList.vue';
import AdminLeaveManagement from "../../../components/Admin/AdminLeaveManagement/AdminLeaveManagement.vue";
let RequestManagement = class RequestManagement extends Vue {
};
RequestManagement = tslib_1.__decorate([
    Component({
        name: 'LeaveRequest',
        components: {
            RequestTableList,
            AdminLeaveManagement,
        },
    })
], RequestManagement);
export default RequestManagement;
//# sourceMappingURL=RequestManagement.js.map