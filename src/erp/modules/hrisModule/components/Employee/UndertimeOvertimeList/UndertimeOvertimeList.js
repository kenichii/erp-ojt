import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
const data = [
    { "id": 1, "date": "2019/01/01", "from": "6:00pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
    { "id": 2, "date": "2019/01/02", "from": "6:30pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
    { "id": 3, "date": "2019/01/03", "from": "7:00pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
    { "id": 4, "date": "2019/01/04", "from": "6:00pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
    { "id": 5, "date": "2019/02/01", "from": "9:00pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
    { "id": 6, "date": "2019/01/11", "from": "10:00pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
    { "id": 7, "date": "2019/02/11", "from": "8:30pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
    { "id": 8, "date": "2018/12/01", "from": "7:00pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
    { "id": 9, "date": "2018/12/01", "from": "6:45pm", "to": "7:00pm", "hours": 1, "reason": "123", "status": "approved" },
];
let UndertimeOvertimeList = class UndertimeOvertimeList extends Vue {
};
UndertimeOvertimeList = tslib_1.__decorate([
    Component({
        name: 'UndertimeOvertimeList',
        components: {},
        data() {
            return {
                data,
                isPaginated: true,
                isPaginationSimple: false,
                defaultSortDirection: 'asc',
                currentPage: 1,
                perPage: 5
            };
        }
    })
], UndertimeOvertimeList);
export default UndertimeOvertimeList;
//# sourceMappingURL=UndertimeOvertimeList.js.map