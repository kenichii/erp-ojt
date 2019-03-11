import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
let FileLeave = class FileLeave extends Vue {
};
FileLeave = tslib_1.__decorate([
    Component({
        name: 'FileLeave',
        components: {},
        data() {
            return {
                dropFiles: [],
                fileLeave: false,
            };
        },
        methods: {
            deleteDropFile(index) {
                this.$data.dropFiles.splice(index, 1);
            },
        },
    })
], FileLeave);
export default FileLeave;
//# sourceMappingURL=FileLeave.js.map