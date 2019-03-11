import {Component, Vue} from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
    name: 'ProfileInformation',
    components: {},
    data() {
        return {
            editView: false,
        };
    },
    computed: {
       ...mapState({
           profileInformation: (state: any) => state.hris.user.profileInformation,
       }),
       ...mapGetters([
       ]),
    },
    methods: {
    },
    mounted() {
        this.$store.dispatch( 'loadProfileInformation');
    },

})

export default class ProfileInformation extends Vue {

}
