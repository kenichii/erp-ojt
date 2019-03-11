import {Component, Vue} from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';

@Component({
    name: 'UpcomingLeaves',
    components: {},
    computed: {
        ...mapState({
            upcomingLeaves: (state: any) => state.hris.user.upcomingLeaves,
        }),
        ...mapGetters([
        ]),
    },
    mounted() {
        this.$store.dispatch( 'loadUpcomingLeaves');
    },
})

export default class UpcomingLeaves extends Vue {

}
