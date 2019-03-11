import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
/*   PENDING/APPROVED/REJECTED  */
const tableData = [{
        id: '1',
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '2',
        type: 'Sick',
        reason: 'Came to office but left early due to gulapanatics dance',
        status: 'Pending',
    },
    {
        id: '2',
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '1',
        type: 'Sick',
        reason: 'Sick',
        status: 'Pending',
    },
    {
        id: '3',
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '3',
        type: 'Sick',
        reason: 'Sick',
        status: 'Pending',
    },
    {
        id: '4',
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '3',
        type: 'Sick',
        reason: 'Sick',
        status: 'Pending',
    },
    {
        id: '5',
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '3',
        type: 'Sick',
        reason: 'Came to office but left early due to ill health',
        status: 'Pending',
    },
    {
        id: '6',
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '3',
        type: 'Sick',
        reason: 'Sick',
        status: 'Pending',
    },
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '3',
        type: 'Sick',
        reason: 'Sick',
        status: 'Approved',
    },
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '3',
        type: 'Sick',
        reason: 'Sick',
        status: 'Approved',
    }];
let LeaveManagementComponent = class LeaveManagementComponent extends Vue {
};
LeaveManagementComponent = tslib_1.__decorate([
    Component({
        name: 'LeaveManagementComponent',
        components: {},
        data() {
            return {
                tableData,
                isBordered: true,
                isPaginated: true,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5,
                sort: true,
                columns: [
                    {
                        field: 'leavestartdate',
                        label: 'Leave Start Date',
                        centered: true,
                    },
                    {
                        field: 'leavenddate',
                        label: 'Leave End Date',
                        centered: true,
                    },
                    {
                        field: 'duration',
                        label: 'Duration',
                        centered: true,
                    },
                    {
                        field: 'type',
                        label: 'Type',
                        centered: true,
                    },
                    {
                        field: 'reason',
                        label: 'Reason',
                    },
                    {
                        field: 'status',
                        label: 'Status',
                    },
                ],
            };
        },
    })
], LeaveManagementComponent);
export default LeaveManagementComponent;
//# sourceMappingURL=LeaveManagement.js.map