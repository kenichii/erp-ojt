import {Component, Vue} from 'vue-property-decorator';
const tableData = [{
    id: 1,
    employeeName: 'Kenneth Be Reach',
    position: 'Front-end Developer',
    timeIn: '8:00am',
    timeOut: '5:00pm',
    schedule: 'monday',
    status: 'Late',
    },
    {
        id: 2,
        employeeName: 'Kenneth beborrow one',
        position: 'Front-end Developer',
        timeIn: '7:00am',
        timeOut: '4:00pm',
        schedule: 'tuesday',
        status: 'Late',
    }];

@Component({
    name: 'EmployeeScheduleComponent',
    components: {},
    data() {
        return {
            tableData,
            isBordered: true,
            isPaginated: true,
            defaultSortDirection: 'asc',
            currentPage: 1,
            perPage: 5,
            isCardModalActive: false,
        };
    },
})
export default class EmployeeScheduleComponent extends Vue {
}
