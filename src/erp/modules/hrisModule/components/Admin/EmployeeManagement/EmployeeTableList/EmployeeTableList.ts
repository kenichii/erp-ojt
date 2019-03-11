import {Component, Vue} from 'vue-property-decorator';

@Component({
    name: 'EmployeeTableList',
    components: {},
    props: [
        'employeeList'
    ],
    data() {
        return {
            isBordered: true,
            isPaginated: true,
            defaultSortDirection: 'asc',
            currentPage: 1,
            perPage: 5,
            isPublic: true,
            sort: true,
            isCardModalActive: false,
        };
    },
})
export default class EmployeeTableList extends Vue {
}
