import {Component, Vue} from 'vue-property-decorator';
import EmployeeTableList from './EmployeeTableList/EmployeeTableList.vue';

const employeeList = [{
    imgUrl: 'https://bulma.io/images/placeholders/48x48.png',
    name: 'Aaron Jared Randrup',
    position: 'Software Engineer',
    department: 'Soft Dev',
},
    {
        imgUrl: 'https://bulma.io/images/placeholders/48x48.png',
        name: 'Kenneth Reyes',
        position: 'Software Engineer OJT',
        department: 'Soft Dev',
    },
];
@Component({
    name: 'EmployeeManagementComponent',
    components: {
        EmployeeTableList
    },
    data() {
        return {
            employeeList,
        };
    },
})

export default class EmployeeManagementComponent extends Vue {
}
