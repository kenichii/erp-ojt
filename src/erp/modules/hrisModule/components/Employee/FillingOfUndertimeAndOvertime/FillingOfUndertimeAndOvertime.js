import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
let FillingOfUndertimeAndOvertime = class FillingOfUndertimeAndOvertime extends Vue {
};
FillingOfUndertimeAndOvertime = tslib_1.__decorate([
    Component({
        name: 'FillingOfUndertimeAndOvertime',
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
], FillingOfUndertimeAndOvertime);
export default FillingOfUndertimeAndOvertime;
//# sourceMappingURL=FillingOfUndertimeAndOvertime.js.map