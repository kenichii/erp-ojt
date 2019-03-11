import {Component, Vue} from 'vue-property-decorator';

const tableData = [{
    id: 1,
    employeeName: 'Kenneth Reyes',
    type: 'Undertime',
    detail: 'detail',
    status: 'Pending',
    },
    {
        id: 2,
        employeeName: 'Kenneth Reyes',
        type: 'Overtime',
        detail: 'detail',
        status: 'Pending',
    }];
@Component({
    name: 'RequestManagement',
    components: {},
    data() {
        return {
            tableData,
            isPaginated: true,
            defaultSortDirection: 'asc',
            currentPage: 1,
            perPage: 5,
        };
    },
    methods: {
        approve() {
            this.$dialog.alert('Approved!');
        },
        reject() {
            this.$dialog.alert('Request Rejected!');
        },
    },
})
export default class RequestTableList extends Vue {
}
