import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
let NavBar = class NavBar extends Vue {
};
NavBar = tslib_1.__decorate([
    Component({
        name: 'NavBar',
        props: {
            userRole: String,
        },
        data() {
            return {
                role: this.$props.userRole,
                userRoles: ['admin', 'tl', 'employee'],
                toggleNav: false
            };
        },
        methods: {
            updateValue(role) {
                this.$emit('changeRole', role);
            },
            showSideNav() {
                this.$data.toggleNav = !this.$data.toggleNav;
                this.$emit('toggleNav', this.$data.toggleNav);
            },
            logout() {
                this.$store.dispatch('logout').then(() => {
                    this.$router.push('/');
                });
            },
        },
    })
], NavBar);
export default NavBar;
//# sourceMappingURL=NavBar.js.map