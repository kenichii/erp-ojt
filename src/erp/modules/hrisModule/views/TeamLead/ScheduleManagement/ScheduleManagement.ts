import {Component, Vue} from 'vue-property-decorator';
import ScheduleManagementComponent from '../../../components/TeamLead/ScheduleManagement/ScheduleManagement.vue';

@Component({
    name: 'ScheduleManagement',
    components: {
        ScheduleManagementComponent,
    },
})
export default class ScheduleManagement extends Vue {}
