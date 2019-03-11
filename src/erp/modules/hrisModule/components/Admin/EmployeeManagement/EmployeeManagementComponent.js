import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import EmployeeTableList from './EmployeeTableList/EmployeeTableList.vue';
const employeeList = [{
        imgUrl: 'https://bulma.io/images/placeholders/48x48.png',
        name: 'Aaron Jared Randrup',
        position: 'Software Engineer',
        department: 'Soft Dev',
    },
    {
        imgUrl: 'https://bulma.io/images/placeholders/48x48.png',
        name: 'Kenneth Reyes',
        position: 'Software Engineer OJT',
        department: 'Soft Dev',
    },
];
let EmployeeManagementComponent = class EmployeeManagementComponent extends Vue {
};
EmployeeManagementComponent = tslib_1.__decorate([
    Component({
        name: 'EmployeeManagementComponent',
        components: {
            EmployeeTableList
        },
        data() {
            return {
                employeeList,
            };
        },
    })
], EmployeeManagementComponent);
export default EmployeeManagementComponent;
//# sourceMappingURL=EmployeeManagementComponent.js.map