import {Component, Vue} from 'vue-property-decorator';
import FillingOfUndertimeAndOvertime from '../../../components/Employee/FillingOfUndertimeAndOvertime/FillingOfUndertimeAndOvertime.vue';

@Component({
    name: 'FillingOfUndertime',
    components: {
        FillingOfUndertimeAndOvertime,
    },
})
export default class FillingOfUndertimeAndOverTime extends Vue {
}
