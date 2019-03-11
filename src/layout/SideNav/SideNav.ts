import {Component, Vue} from 'vue-property-decorator';
import TimeInTimeOut from '../../erp/modules/hrisModule/components/Employee/TimeInTimeOut/TimeInTimeOut.vue';
@Component({
    name: 'SideNav',
    props: {
        menuItem: Array,
        toggleNav: Boolean,
    },
    components: {
        TimeInTimeOut,
    },
})
export default class SideNav extends Vue {
}
