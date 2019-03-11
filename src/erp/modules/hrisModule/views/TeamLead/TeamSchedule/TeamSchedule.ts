import {Component, Vue} from 'vue-property-decorator';
import TeamScheduleManagement from '../../../components/TeamLead/TeamScheduleManagement/TeamScheduleManagement.vue';

@Component({
    name: 'TeamSchedule',
    components: {
      TeamScheduleManagement
    },
})
export default class TeamSchedule extends Vue {}

