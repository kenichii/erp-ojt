import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
const tableData = [{
        date: '2008-09-15T15:53:00',
        timeIn: '8:00am',
        timeOut: '5:00pm',
        status: 'Not Late',
    },
    {
        date: '2019-09-14T15:53:00',
        timeIn: '8:20am',
        timeOut: '5:00pm',
        status: 'Late',
    },
];
let TimeSheetComponent = class TimeSheetComponent extends Vue {
};
TimeSheetComponent = tslib_1.__decorate([
    Component({
        name: 'TimeSheetComponent',
        components: {},
        data() {
            return {
                tableData,
                isBordered: true,
                isPaginated: true,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5,
            };
        },
    })
], TimeSheetComponent);
export default TimeSheetComponent;
//# sourceMappingURL=TimeSheet.js.map