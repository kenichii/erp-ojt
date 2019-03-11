import {Component, Vue} from 'vue-property-decorator';

@Component({
    name: 'ConfirmReset',
    components: {},
    data() {
        return {
            isCardModalActive: false,
        };
    },
})
export default class ConfirmReset extends Vue {
}
