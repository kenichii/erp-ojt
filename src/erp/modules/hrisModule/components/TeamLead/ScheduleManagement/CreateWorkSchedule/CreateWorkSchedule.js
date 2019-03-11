import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
let CreateWorkSchedule = class CreateWorkSchedule extends Vue {
};
CreateWorkSchedule = tslib_1.__decorate([
    Component({
        name: 'CreateWorkSchedule',
        components: {},
        data() {
            return {
                type: 'OverTime',
                file: null,
            };
        },
        computed: {
            format() {
                return '12';
            },
        },
    })
], CreateWorkSchedule);
export default CreateWorkSchedule;
//# sourceMappingURL=CreateWorkSchedule.js.map