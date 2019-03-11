import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
let ProfileInformation = class ProfileInformation extends Vue {
};
ProfileInformation = tslib_1.__decorate([
    Component({
        name: 'ProfileInformation',
        components: {},
        data() {
            return {
                editView: false,
            };
        },
        computed: {
            ...mapState({
                profileInformation: (state) => state.hris.user.profileInformation,
            }),
            ...mapGetters([]),
        },
        methods: {},
        mounted() {
            this.$store.dispatch('loadProfileInformation');
        },
    })
], ProfileInformation);
export default ProfileInformation;
//# sourceMappingURL=profileInformation.js.map