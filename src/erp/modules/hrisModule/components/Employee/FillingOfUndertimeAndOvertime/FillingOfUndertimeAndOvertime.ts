import {Component, Vue} from 'vue-property-decorator';

@Component({
    name: 'FillingOfUndertimeAndOvertime',
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
export default class FillingOfUndertimeAndOvertime extends Vue {
}
