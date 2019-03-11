import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import SideNav from '../SideNav/SideNav.vue';
import NavBar from '../NavBar/NavBar.vue';
let MainLayout = class MainLayout extends Vue {
    constructor() {
        super(...arguments);
        this.userRole = 'admin';
        this.toggleNav = false;
        this.employeeMenu = [{ path: '/hris/dashboard', name: 'Dashboard' },
            { path: '/hris/employeeInformation', name: 'Employee Information' },
            { path: '/hris/userInformation', name: 'User Information' },
            { path: '/hris/TimeSheet', name: 'Time Sheet' },
            { path: '/hris/UndertimeOvertime', name: 'Undertime / OverTime' },
            { path: '/hris/EmployeeLeaveManagement', name: 'Leave Management' },
            { path: '/hris/EmployeeSchedule', name: 'Employee Schedule' },
            { path: '/hris/eod', name: 'Create Eod' },
        ];
        this.tlMenu = [{ path: '/hris/dashboard', name: 'Dashboard' },
            { path: '/hris/employeeInformation', name: 'Employee Information' },
            { path: '/hris/userInformation', name: 'User Information' },
            { path: '/hris/TimeSheet', name: 'Time Sheet' },
            { path: '/hris/UndertimeOvertime', name: 'Undertime / OverTime' },
            { path: '/hris/RequestManagement', name: 'Request Management' },
            { path: '/hris/TeamSchedule', name: 'Team Schedule' },
        ];
        this.adminMenu = [{ path: '/hris/dashboard', name: 'Dashboard' },
            { path: '/hris/EmployeeManagement', name: 'Employee Management' },
            { path: '/hris/employeeInformation', name: 'Employee Information' },
            { path: '/hris/userInformation', name: 'User Information' },
            { path: '/hris/TimeSheet', name: 'Time Sheet' },
            { path: '/hris/UndertimeOvertime', name: 'Undertime / OverTime' },
            { path: '/hris/leaveManagement', name: 'Leave Management' },
            { path: '/hris/RequestManagement', name: 'Request Management' },
            { path: '/hris/ScheduleManagement', name: 'Schedule Management' },
        ];
    }
    created() {
        this.changeRole(this.userRole);
        this.toogleSideNav(this.toggleNav);
    }
    toogleSideNav(toggle) {
        this.toggleNav = toggle;
    }
    changeRole(role) {
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
};
MainLayout = tslib_1.__decorate([
    Component({
        name: 'MainLayout',
        components: {
            SideNav,
            NavBar,
        },
    })
], MainLayout);
export default MainLayout;
//# sourceMappingURL=MainLayout.js.map