import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
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
            this.$data.toggleNav = !this.$data.toggleNav
            this.$emit('toggleNav', this.$data.toggleNav)
        },
        logout() {
            this.$store.dispatch('logout').then(() => {
                this.$router.push('/');
            });
        },
    },
})
export default class NavBar extends Vue {

}
