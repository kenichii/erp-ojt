import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapState } from "vuex";
let ContactInformation = class ContactInformation extends Vue {
};
ContactInformation = tslib_1.__decorate([
    Component({
        name: 'ContactInformation',
        components: {},
        data: function () {
            return {
                editView: false
            };
        },
        computed: {
            ...mapState({
                profileInformation: (state) => state.hris.user.profileInformation,
            }),
            ...mapGetters([]),
        },
        mounted() {
            this.$store.dispatch('loadProfileInformation');
        },
    })
], ContactInformation);
export default ContactInformation;
//# sourceMappingURL=ContactInformation.js.map