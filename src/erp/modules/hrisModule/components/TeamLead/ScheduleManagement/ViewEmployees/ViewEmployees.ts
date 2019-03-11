import {Component, Vue} from 'vue-property-decorator';

const tableData = [{
    id: 1,
    employeeName: 'Kenneth Be Borrow One',
    },
    {
        id: 2,
        employeeName: 'Kenneth Be Reach',
    },
];
@Component({
    name: 'ViewEmployees',
    components: {},
    data() {
        return {
            editView: false,
            editTimeSchedule: false,
            tableData,
            isBordered: true,
            isPaginated: true,
            defaultSortDirection: 'asc',
            currentPage: 1,
            perPage: 5,
            isCardModalActive: false,
            isToggled: false,
        };
    },
})
export default class ViewEmployees extends Vue {
}
