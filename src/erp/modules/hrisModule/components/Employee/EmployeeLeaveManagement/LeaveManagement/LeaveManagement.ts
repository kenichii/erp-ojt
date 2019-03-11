import {Component, Vue} from 'vue-property-decorator';
import FileLeave from '../FileLeave/FileLeave.vue';

const tableData = [
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        days: '2',
        type: 'Sick',
        reason: 'Came to office but left early due to ill health',
        status: 'Pending',
    },
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        days: '1',
        type: 'Sick',
        reason: 'Sick',
        status: 'Rejected',
    },
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        days: '3',
        type: 'Sick',
        reason: 'Hand injury because of playing billiard',
        status: 'Approved',
    },
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        days: '5',
        type: 'Sick',
        reason: 'Not Feeling well',
        status: 'Approved',
    },
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        days: '3',
        type: 'Sick',
        reason: 'Hand injury because of playing billiard',
        status: 'Approved',
    },
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        days: '3',
        type: 'Sick',
        reason: 'Hand injury because of playing billiard',
        status: 'Approved',
    },
    {
        leavestartdate: 'May 14, 2018',
        leaveenddate: 'May 18, 2018',
        days: '3',
        type: 'Sick',
        reason: 'Hand injury because of playing billiard',
        status: 'Approved',
    },
];


@Component({
    name: 'LeaveManagement',
    components: {
        FileLeave,
    },
    data() {
        return {
            fileLeave: false,
            sort: true,
            tableData,
            isBordered: true,
            isPaginated: true,
            defaultSortDirection: 'asc',
            currentPage: 1,
            perPage: 10,
            isPublic: true,
        };
    },
})
export default class LeaveManagement extends Vue {
}
