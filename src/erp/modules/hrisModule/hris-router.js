import { MainLayout, DashBoard, UserInformation, EmployeeInformation, LeaveManagement, TimeSheet, RequestManagement, EmployeeSchedule, ScheduleManagement, EmployeeLeaveManagement, EmployeeManagement, EmployeeForm, EmployeeManagementComponent, TeamSchedule, UndertimeOvertime, } from './index-routes';
const routes = [
    {
        path: '/hris',
        component: MainLayout,
        children: [
            {
                path: '',
                redirect: 'dashboard',
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                component: DashBoard,
            },
            {
                path: 'leaveManagement',
                name: 'leaveManagement',
                component: LeaveManagement,
            },
            {
                path: 'EmployeeLeaveManagement',
                name: 'EmployeeLeaveManagement',
                component: EmployeeLeaveManagement,
            },
            {
                path: 'EmployeeManagement',
                component: EmployeeManagement,
                children: [
                    {
                        path: '',
                        component: EmployeeManagementComponent,
                    },
                    {
                        path: 'AddEmployee',
                        name: 'AddEmployee',
                        component: EmployeeForm
                    },
                    {
                        path: 'EditEmployee',
                        name: 'EditEmployee',
                        component: EmployeeForm
                    }
                ]
            },
            {
                path: 'RequestManagement',
                name: 'RequestManagement',
                component: RequestManagement,
            },
            {
                path: 'userInformation',
                name: 'userInformation',
                component: UserInformation,
            },
            {
                path: 'EmployeeInformation',
                name: 'EmployeeInformation',
                component: EmployeeInformation,
            },
            {
                path: 'EmployeeSchedule',
                name: 'EmployeeSchedule',
                component: EmployeeSchedule,
            },
            {
                path: 'ScheduleManagement',
                name: 'ScheduleManagement',
                component: ScheduleManagement,
            },
            {
                path: 'TeamSchedule',
                name: 'TeamSchedule',
                component: TeamSchedule,
            },
            {
                path: 'TimeSheet',
                name: 'TimeSheet',
                component: TimeSheet,
            },
            {
                path: 'UndertimeOvertime',
                name: 'UndertimeOvertime',
                component: UndertimeOvertime,
            },
        ],
    },
];
export default routes;
//# sourceMappingURL=hris-router.js.map