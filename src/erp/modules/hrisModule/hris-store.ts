import axios from 'axios';

export const hrisStore = {
    state: {
        user: {
            profileInformation: { },
            employmentInformation: {},
            employeeLeaveManagement: {},
            upcomingLeaves: {},
            upcomingHolidays: {},

        },
    },
    mutations: {
        SET_UPCOMINGLEAVES(state: any, upcomingLeaves: any) {
            state.user.upcomingLeaves = upcomingLeaves;
        },
        SET_UPCOMINGHOLIDAYS(state: any, upcomingHolidays: any) {
            state.user.upcomingHolidays = upcomingHolidays;
        },
        SET_PROFILEINFORMATION(state: any, profileInformation: any) {
            state.user.profileInformation = profileInformation;
        },

        SET_EMPLOYEE_LEAVE_MANAGEMENT(state: any, employeeLeaveManagement: any) {
            state.user.employeeLeaveManagement = employeeLeaveManagement;
        },
    },
    actions: {
        loadUpcomingLeaves(context: any) {
            axios
                .get('/api/upcomingLeaves.json')
                .then((data) => {
                    context.commit('SET_UPCOMINGLEAVES', data.data);
                })
                .catch();
        },
        loadUpcomingHolidays(context: any) {
            axios
                .get('/api/upcomingHolidays.json')
                .then((data) => {
                    context.commit('SET_UPCOMINGHOLIDAYS', data.data);
                })
                .catch();
        },
        loadProfileInformation(context: any) {
            axios
                .get('/api/profileInfo.json')
                .then((data) => {
                    context.commit('SET_PROFILEINFORMATION', data.data);
                })
                .catch();
        },
        /* loadEmploymentHistory(context: any) {
             axios
                 .get('/api/employmentHistory.json')
                 .then((data) => {
                     context.commit('SET_EMPLOYMENTHISTORY', data.data);
                 })
                 .catch();
         },*/
        loadEmployeeLeaveManagement(context: any) {
            axios
                .get('/api/employeeLeaveManagement.json')
                .then((data) => {
                    context.commit('SET_EMPLOYEE_LEAVE_MANAGEMENT', data.data);
                })
                .catch();
        },


    },
};

export default hrisStore;
