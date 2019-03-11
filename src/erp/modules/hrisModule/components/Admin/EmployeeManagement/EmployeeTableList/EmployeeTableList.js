import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
let EmployeeTableList = class EmployeeTableList extends Vue {
};
EmployeeTableList = tslib_1.__decorate([
    Component({
        name: 'EmployeeTableList',
        components: {},
        props: [
            'employeeList'
        ],
        data() {
            return {
                isBordered: true,
                isPaginated: true,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5,
                isPublic: true,
                sort: true,
                isCardModalActive: false,
            };
        },
    })
], EmployeeTableList);
export default EmployeeTableList;
//# sourceMappingURL=EmployeeTableList.js.map