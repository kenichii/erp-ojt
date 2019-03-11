import {Component, Vue} from 'vue-property-decorator';
@Component({
    name: 'CreateWorkSchedule',
    components: {},
    data() {
        return {
            type: 'OverTime',
            file: null,
        };
    },
    computed: {
        format() {
            return '12';
        },
    },
})
export default class CreateWorkSchedule extends Vue {
}
