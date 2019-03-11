import {Component, Vue} from 'vue-property-decorator';


const data = [
    {
        'id': 1,
        'lastname' : 'lastname1',
        'firstname' : 'firstnamea',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id' : 2,
        'lastname' : 'lastname2',
        'firstname' : 'firstnameb',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id': 3,
        'lastname' : 'lastname3',
        'firstname' : 'firstnamec',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id' : 4,
        'lastname' : 'lastname4',
        'firstname' : 'firstnamee',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id' : 5,
        'lastname' : 'lastname5',
        'firstname' : 'firstnamef',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id': 6,
        'lastname' : 'lastname6',
        'firstname' : 'firstnameg',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id' : 7,
        'lastname' : 'lastname7',
        'firstname' : 'firstnameh',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id' : 8,
        'lastname' : 'lastname8',
        'firstname' : 'firstnamei',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id': 9,
        'lastname' : 'lastname9',
        'firstname' : 'firstnamed',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
    {
        'id' : 10,
        'lastname' : 'lastname10',
        'firstname' : 'firstnamej',
        'monday' : '7:00am - 5:00pm',
        'tuesday' : '7:00am - 5:00pm',
        'wednesday' : '7:00am - 5:00pm',
        'thursday' : '7:00am - 5:00pm',
        'friday' : '7:00am - 5:00pm',
        'saturday' : 'rest day',
        'sunday' : 'restday',
        'edit' : false
    },
];
@Component({
    name: 'TeamScheduleManagement',
    data() {
        return {
            data,
            isPaginated: true,
            isPaginationSimple: false,
            defaultSortDirection: 'asc',
            currentPage: 1,
            perPage: 5,
        };
    },
})
export default class TeamScheduleManagement extends Vue {
    employees: employeeSchedule[] = [];
    public created() {
        this.employees.push({
            LastName: 'employee1',
            FirstName: 'employee1',
            edit: false,
        });
        this.employees.push({
            LastName: 'employee2',
            FirstName: 'employee2',
            edit: false,
        });
        this.employees.push({
            LastName: 'employee3',
            FirstName: 'employee3',
            edit: false,
        });
        this.employees.push({
            LastName: 'employee4',
            FirstName: 'employee4',
            edit: false,
        });
        this.employees.push({
            LastName: 'employee5',
            FirstName: 'employee5',
            edit: false,
        }); // static population of data

        console.log(this.employees)
    }

    public edit(i: any) {
        this.$data.data[i].edit = !this.$data.data[i].edit;
        console.log(this.$data.data[i]);
    }

    public confirm() {
        Vue.swal({
            title: 'Are you sure?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        });
    }

}

class employeeSchedule {
    LastName: string;
    FirstName: string;
    edit: boolean;
}
