import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import LeavesCount from '../../../Employee/EmployeeLeaveManagement/LeavesCount/LeavesCount.vue';
let LeaveDetailsModal = class LeaveDetailsModal extends Vue {
};
LeaveDetailsModal = tslib_1.__decorate([
    Component({
        name: 'LeaveDetailsModal',
        props: [
            'selected',
        ],
        components: {
            LeavesCount
        },
    })
], LeaveDetailsModal);
export default LeaveDetailsModal;
//# sourceMappingURL=LeaveDetailsModal.js.map