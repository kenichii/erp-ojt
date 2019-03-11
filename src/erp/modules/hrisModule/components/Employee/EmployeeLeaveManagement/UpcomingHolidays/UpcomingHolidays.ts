import {Component, Vue} from 'vue-property-decorator';
import {mapGetters, mapState} from "vuex";

@Component({
    name: 'UpcomingHolidays',
    components: {},
    computed: {
        ...mapState({
            upcomingHolidays: (state: any) => state.hris.user.upcomingHolidays,
        }),
        ...mapGetters([
        ]),
    },
    mounted() {
        this.$store.dispatch( 'loadUpcomingHolidays');
    },
})
export default class UpcomingHolidays extends Vue {
}
