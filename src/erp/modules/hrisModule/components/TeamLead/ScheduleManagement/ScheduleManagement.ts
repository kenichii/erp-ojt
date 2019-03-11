import {Component, Vue} from 'vue-property-decorator';
import CreateWorkSchedule from './CreateWorkSchedule/CreateWorkSchedule.vue';
import ViewEmployees from './ViewEmployees/ViewEmployees.vue';
const data = [
    {id: 1, shiftName: '', monday: '8am - 5pm', tuesday: '8am - 5pm', wednesday: '8am - 5pm', thursday: '8am - 5pm', friday: '8am - 5pm', saturday: 'no work', sunday: 'no work', numberOfEmployees: '12',"edit":false},
    {id: 2, shiftName: '', monday: '7am - 4pm', tuesday: '7am - 4pm', wednesday: '7am - 4pm', thursday: '8am - 5pm', friday: '8am - 5pm', saturday: 'no work', sunday: 'no work', numberOfEmployees: '12',"edit":false},
];
@Component({
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

export default class ScheduleManagementComponent extends Vue {
    employees: employeeSchedule[] = [];
    private isDeleted: boolean = false;
    public edit(i: any){
        this.$data.data[i].edit = !this.$data.data[i].edit;
        console.log(this.$data.data[i]);
    }

    public toggleDelete() {
        if (!this.isDeleted) {
            Vue.swal({
                title: 'Are you sure you want to this schedule?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.value) {
                    Vue.swal(
                        'Success!',
                        'Schedule has been deleted',
                        'success',
                    );
                    this.isDeleted = false;
                }
            });
        }
    }
}
class  employeeSchedule {
    edit: boolean;
}
