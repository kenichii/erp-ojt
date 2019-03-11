import {Component, Vue} from 'vue-property-decorator';
import {mapGetters, mapState} from "vuex";
@Component({
    name: 'ContactInformation',
    components: {},
    data: function () {
        return {
            editView: false
        }
    },
    computed: {
        ...mapState({
            profileInformation: (state: any) => state.hris.user.profileInformation,
        }),
        ...mapGetters([
        ]),
    },
    mounted() {
        this.$store.dispatch( 'loadProfileInformation');
    },
})
export default class ContactInformation extends Vue {}
