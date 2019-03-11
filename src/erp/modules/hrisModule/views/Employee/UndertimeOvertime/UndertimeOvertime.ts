import {Component, Vue} from 'vue-property-decorator';
import UndertimeOvertimeList from '../../../components/Employee/UndertimeOvertimeList/UndertimeOvertimeList.vue';


@Component({
    name: 'UndertimeOvertime',
    components: {
        UndertimeOvertimeList
    }
})

export default class UndertimeOvertime extends Vue {
}