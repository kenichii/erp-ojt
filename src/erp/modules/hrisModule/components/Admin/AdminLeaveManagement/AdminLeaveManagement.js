import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import LeavesCount from '../../Employee/EmployeeLeaveManagement/LeavesCount/LeavesCount.vue';
import LeaveDetailsModal from './LeaveDetailsModal/LeaveDetailsModal.vue';
/*   PENDING/APPROVED/REJECTED  */
const status = [
    { 'id': 1, 'status': 'Pending' },
    { 'id': 2, 'status': 'Rejected' },
    { 'id': 3, 'status': 'Approved' },
];
const tableData = [{
        id: '1',
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        duration: '2',
        type: 'Sick',
        reason: 'Came to office but left early due to ill health',
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
let AdminLeaveManagement = class AdminLeaveManagement extends Vue {
};
AdminLeaveManagement = tslib_1.__decorate([
    Component({
        name: 'AdminLeaveManagement',
        components: {
            LeavesCount,
            LeaveDetailsModal,
        },
        data() {
            return {
                status,
                tableData,
                selected: tableData[0],
                isBordered: true,
                isPaginated: true,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5,
                isPublic: true,
                sort: true,
                isCardModalActive: false,
                defaultOpenedDetails: [1],
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
        methods: {
            toggleModal() {
                this.$data.isCardModalActive = true;
            },
            approve() {
                this.$dialog.alert('Approved!');
            },
            reject() {
                this.$dialog.alert('Request Rejected!');
            },
        },
    })
], AdminLeaveManagement);
export default AdminLeaveManagement;
//# sourceMappingURL=AdminLeaveManagement.js.map