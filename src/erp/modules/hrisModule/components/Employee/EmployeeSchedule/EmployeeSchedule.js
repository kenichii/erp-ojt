import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
const tableData = [{
        id: 1,
        employeeName: 'Kenneth Be Reach',
        position: 'Front-end Developer',
        timeIn: '8:00am',
        timeOut: '5:00pm',
        schedule: 'monday',
        status: 'Late',
    },
    {
        id: 2,
        employeeName: 'Kenneth beborrow one',
        position: 'Front-end Developer',
        timeIn: '7:00am',
        timeOut: '4:00pm',
        schedule: 'tuesday',
        status: 'Late',
    }];
let EmployeeScheduleComponent = class EmployeeScheduleComponent extends Vue {
};
EmployeeScheduleComponent = tslib_1.__decorate([
    Component({
        name: 'EmployeeScheduleComponent',
        components: {},
        data() {
            return {
                tableData,
                isBordered: true,
                isPaginated: true,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5,
                isCardModalActive: false,
            };
        },
    })
], EmployeeScheduleComponent);
export default EmployeeScheduleComponent;
//# sourceMappingURL=EmployeeSchedule.js.map