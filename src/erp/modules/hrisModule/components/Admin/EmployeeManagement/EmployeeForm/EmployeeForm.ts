import {Component, Vue} from 'vue-property-decorator';
import {EmployeeModel} from "../../../../models/employeeModel/EmployeeModel";


@Component({
    name: 'AddEmployee',
    components: {},
    data() {
        return {
            currentRoute: this.$route.name,
            employee: {
                gender: 'male',
                EmployeeModel
            }
        }
    },
})
export default class EmployeeForm extends Vue {

    employee: EmployeeModel = new EmployeeModel();

    validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                this.$toast.open({
                    message: 'Form is valid!',
                    type: 'is-success',
                    position: 'is-bottom'
                })
                console.log(this.employee, 'aa');
                return;
            }
            this.$toast.open({
                message: 'Form is not valid! Please check the fields.',
                type: 'is-danger',
                position: 'is-bottom'
            })
        });
    }

    addRow() {
        /* this.employee.educationalBackground.push({
             startDate: '',
         })*/
    }
}
