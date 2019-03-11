import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import CreateWorkSchedule from './CreateWorkSchedule/CreateWorkSchedule.vue';
import ViewEmployees from './ViewEmployees/ViewEmployees.vue';
const data = [
    { id: 1, shiftName: '', monday: '8am - 5pm', tuesday: '8am - 5pm', wednesday: '8am - 5pm', thursday: '8am - 5pm', friday: '8am - 5pm', saturday: 'no work', sunday: 'no work', numberOfEmployees: '12', "edit": false },
    { id: 2, shiftName: '', monday: '7am - 4pm', tuesday: '7am - 4pm', wednesday: '7am - 4pm', thursday: '8am - 5pm', friday: '8am - 5pm', saturday: 'no work', sunday: 'no work', numberOfEmployees: '12', "edit": false },
];
let ScheduleManagementComponent = class ScheduleManagementComponent extends Vue {
    constructor() {
        super(...arguments);
        this.employees = [];
        this.isDeleted = false;
    }
    edit(i) {
        this.$data.data[i].edit = !this.$data.data[i].edit;
        console.log(this.$data.data[i]);
    }
    toggleDelete() {
        if (!this.isDeleted) {
            Vue.swal({
                title: 'Are you sure you want to this schedule?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.value) {
                    Vue.swal('Success!', 'Schedule has been deleted', 'success');
                    this.isDeleted = false;
                }
            });
        }
    }
};
ScheduleManagementComponent = tslib_1.__decorate([
    Component({
        name: 'ScheduleManagementComponent',
        components: {
            CreateWorkSchedule,
            ViewEmployees,
        },
        data() {
            return {
                editView: false,
                editTimeSchedule: false,
                data,
                isPaginated: true,
                isPaginationSimple: false,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5,
                isCardModalActive: false,
                viewEmployees: false,
                isToggled: false,
            };
        },
        computed: {
            format() {
                return '12';
            },
        },
    })
], ScheduleManagementComponent);
export default ScheduleManagementComponent;
class employeeSchedule {
}
//# sourceMappingURL=ScheduleManagement.js.map