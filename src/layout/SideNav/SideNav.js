import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import TimeInTimeOut from '../../erp/modules/hrisModule/components/Employee/TimeInTimeOut/TimeInTimeOut.vue';
let SideNav = class SideNav extends Vue {
};
SideNav = tslib_1.__decorate([
    Component({
        name: 'SideNav',
        props: {
            menuItem: Array,
            toggleNav: Boolean,
        },
        components: {
            TimeInTimeOut,
        },
    })
], SideNav);
export default SideNav;
//# sourceMappingURL=SideNav.js.map