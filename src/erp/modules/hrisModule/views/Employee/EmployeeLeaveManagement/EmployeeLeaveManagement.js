import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import LeavesCount from '../../../components/Employee/EmployeeLeaveManagement/LeavesCount/LeavesCount.vue';
import LeaveManagement from '../../../components/Employee/EmployeeLeaveManagement/LeaveManagement/LeaveManagement.vue';
import UpcomingHolidays from '../../../components/Employee/EmployeeLeaveManagement/UpcomingHolidays/UpcomingHolidays.vue';
import UpcomingLeaves from '../../../components/Employee/EmployeeLeaveManagement/UpcomingLeaves/UpcomingLeaves.vue';
import { mapGetters, mapState } from "vuex";
let EmployeeLeaveManagement = class EmployeeLeaveManagement extends Vue {
    constructor() {
        super(...arguments);
        this.isSubmit = true;
    }
    toggleSubmit() {
        if (this.isSubmit) {
            /*TODO: 2548, 2552, 2553*/
            Vue.swal('File Leave Submitted', '', 'success');
        }
    }
};
EmployeeLeaveManagement = tslib_1.__decorate([
    Component({
        name: 'EmployeeLeaveManagement',
        props: ['upcomings'],
        data() {
            return {
                fileLeave: false,
            };
        },
        components: {
            LeavesCount,
            LeaveManagement,
            UpcomingLeaves,
            UpcomingHolidays,
        },
        computed: {
            ...mapState({
                employeeLeaveManagement: (state) => state.hris.user.employeeLeaveManagement,
            }),
            ...mapGetters([]),
        },
        methods: {
            updateEmployeeLeaveManagement() {
                console.log('update');
            },
        },
        mounted() {
            this.$store.dispatch('loadEmployeeLeaveManagement')
                .catch((error) => {
                console.log('error');
                console.log(error);
            });
        },
    })
], EmployeeLeaveManagement);
export default EmployeeLeaveManagement;
//# sourceMappingURL=EmployeeLeaveManagement.js.map