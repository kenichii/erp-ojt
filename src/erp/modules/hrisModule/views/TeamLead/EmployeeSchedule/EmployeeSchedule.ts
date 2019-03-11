import {Component, Vue} from 'vue-property-decorator';
import EmployeeScheduleComponent from '../../../components/Employee/EmployeeSchedule/EmployeeSchedule.vue';

@Component({
    name: 'EmployeeSchedule',
    components: {
        EmployeeScheduleComponent,
    },
})
export default class EmployeeSchedule extends Vue {}
