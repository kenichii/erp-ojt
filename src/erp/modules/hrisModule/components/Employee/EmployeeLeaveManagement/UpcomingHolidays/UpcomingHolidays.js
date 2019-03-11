import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapState } from "vuex";
let UpcomingHolidays = class UpcomingHolidays extends Vue {
};
UpcomingHolidays = tslib_1.__decorate([
    Component({
        name: 'UpcomingHolidays',
        components: {},
        computed: {
            ...mapState({
                upcomingHolidays: (state) => state.hris.user.upcomingHolidays,
            }),
            ...mapGetters([]),
        },
        mounted() {
            this.$store.dispatch('loadUpcomingHolidays');
        },
    })
], UpcomingHolidays);
export default UpcomingHolidays;
//# sourceMappingURL=UpcomingHolidays.js.map