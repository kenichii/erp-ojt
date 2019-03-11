import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
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
let RequestTableList = class RequestTableList extends Vue {
};
RequestTableList = tslib_1.__decorate([
    Component({
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
], RequestTableList);
export default RequestTableList;
//# sourceMappingURL=RequestTableList.js.map