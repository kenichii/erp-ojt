import {Component, Vue} from 'vue-property-decorator';
import SideNav from '../SideNav/SideNav.vue';
import NavBar from '../NavBar/NavBar.vue';

@Component({
    name: 'MainLayout',

    components: {
        SideNav,
        NavBar,
    },
})
export default class MainLayout extends Vue {
    private userRole: string = 'admin';
    private toggleNav: boolean = false;
    private menuItem: Array<{
        path: string;
        name: string;
    }> | undefined;


    private employeeMenu = [{path: '/hris/dashboard', name: 'Dashboard'},
        {path: '/hris/employeeInformation', name: 'Employee Information'},
        {path: '/hris/userInformation', name: 'User Information'},
        {path: '/hris/TimeSheet', name: 'Time Sheet'},
        {path: '/hris/UndertimeOvertime', name: 'Undertime / OverTime'},
        {path: '/hris/EmployeeLeaveManagement', name: 'Leave Management'},
        {path: '/hris/EmployeeSchedule', name: 'Employee Schedule'},
        {path: '/hris/eod', name: 'Create Eod'},
    ];

    private tlMenu = [{path: '/hris/dashboard', name: 'Dashboard'},
        {path: '/hris/employeeInformation', name: 'Employee Information'},
        {path: '/hris/userInformation', name: 'User Information'},
        {path: '/hris/TimeSheet', name: 'Time Sheet'},
        {path: '/hris/UndertimeOvertime', name: 'Undertime / OverTime'},
        {path: '/hris/RequestManagement', name: 'Request Management'},
        {path: '/hris/TeamSchedule', name: 'Team Schedule'},
    ];

    private adminMenu = [{path: '/hris/dashboard', name: 'Dashboard'},
        {path: '/hris/EmployeeManagement', name: 'Employee Management'},
        {path: '/hris/employeeInformation', name: 'Employee Information'},
        {path: '/hris/userInformation', name: 'User Information'},
        {path: '/hris/TimeSheet', name: 'Time Sheet'},
        {path: '/hris/UndertimeOvertime', name: 'Undertime / OverTime'},
        {path: '/hris/leaveManagement', name: 'Leave Management'},
        {path: '/hris/RequestManagement', name: 'Request Management'},
        {path: '/hris/ScheduleManagement', name: 'Schedule Management'},
    ];

    public created() {
        this.changeRole(this.userRole);
        this.toogleSideNav(this.toggleNav);
    }

    private toogleSideNav(toggle: boolean) {

        this.toggleNav = toggle;

    }

    private changeRole(role: string) {
        this.userRole = role;
        /* console.log(this.userRole, 'main');*/
        if (this.userRole === 'admin') {
            this.menuItem = this.adminMenu;
        }
        else if (this.userRole === 'tl') {
            this.menuItem = this.tlMenu;
        }
        else {
            this.menuItem = this.employeeMenu;
        }
    }
}
