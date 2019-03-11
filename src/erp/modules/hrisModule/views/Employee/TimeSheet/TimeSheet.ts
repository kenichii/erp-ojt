import {Component, Vue} from 'vue-property-decorator';
import TimeSheetComponent from '../../../components/Employee/TimeSheet/TimeSheet.vue';

@Component({
    name: 'TimeSheet',
    components: {
        TimeSheetComponent,
    },
})
export default class TimeSheet extends Vue {
}
