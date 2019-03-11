import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
let UpcomingLeaves = class UpcomingLeaves extends Vue {
};
UpcomingLeaves = tslib_1.__decorate([
    Component({
        name: 'UpcomingLeaves',
        components: {},
        computed: {
            ...mapState({
                upcomingLeaves: (state) => state.hris.user.upcomingLeaves,
            }),
            ...mapGetters([]),
        },
        mounted() {
            this.$store.dispatch('loadUpcomingLeaves');
        },
    })
], UpcomingLeaves);
export default UpcomingLeaves;
//# sourceMappingURL=UpcomingLeaves.js.map