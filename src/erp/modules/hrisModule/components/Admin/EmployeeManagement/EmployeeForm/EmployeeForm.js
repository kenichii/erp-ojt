import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { EmployeeModel } from "../../../../models/employeeModel/EmployeeModel";
let EmployeeForm = class EmployeeForm extends Vue {
    constructor() {
        super(...arguments);
        this.employee = new EmployeeModel();
    }
    validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                this.$toast.open({
                    message: 'Form is valid!',
                    type: 'is-success',
                    position: 'is-bottom'
                });
                console.log(this.employee, 'aa');
                return;
            }
            this.$toast.open({
                message: 'Form is not valid! Please check the fields.',
                type: 'is-danger',
                position: 'is-bottom'
            });
        });
    }
    addRow() {
        /* this.employee.educationalBackground.push({
             startDate: '',
         })*/
    }
};
EmployeeForm = tslib_1.__decorate([
    Component({
        name: 'AddEmployee',
        components: {},
        data() {
            return {
                currentRoute: this.$route.name,
                employee: {
                    gender: 'male',
                    EmployeeModel
                }
            };
        },
    })
], EmployeeForm);
export default EmployeeForm;
//# sourceMappingURL=EmployeeForm.js.map