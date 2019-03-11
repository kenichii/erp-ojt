import {Component, Vue} from 'vue-property-decorator';
import LeavesCount from '../../../components/Employee/EmployeeLeaveManagement/LeavesCount/LeavesCount.vue';
import LeaveManagement from '../../../components/Employee/EmployeeLeaveManagement/LeaveManagement/LeaveManagement.vue';
import UpcomingHolidays from '../../../components/Employee/EmployeeLeaveManagement/UpcomingHolidays/UpcomingHolidays.vue';
import FileLeave from '../../../components/Employee/EmployeeLeaveManagement/FileLeave/FileLeave.vue';
import UpcomingLeaves from '../../../components/Employee/EmployeeLeaveManagement/UpcomingLeaves/UpcomingLeaves.vue';
import {mapGetters, mapState} from "vuex";
@Component({
    name: 'EmployeeLeaveManagement',
    props:['upcomings'],
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
            employeeLeaveManagement: (state: any) => state.hris.user.employeeLeaveManagement,
        }),
        ...mapGetters([
        ]),
    },
    methods: {
        updateEmployeeLeaveManagement(){
            console.log('update');
        },
    },
    mounted() {
        this.$store.dispatch( 'loadEmployeeLeaveManagement')
            .catch((error) => {
                console.log('error');
                console.log(error);
            });
    },
})
export default class EmployeeLeaveManagement extends Vue {
    private isSubmit: boolean = true;

    public toggleSubmit() {
        if (this.isSubmit) {
            /*TODO: 2548, 2552, 2553*/
            Vue.swal(
                'File Leave Submitted',
                '',
                'success',
            );
        }
    }
}
