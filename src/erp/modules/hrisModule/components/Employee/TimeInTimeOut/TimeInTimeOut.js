import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';
let TimeInTimeOut = class TimeInTimeOut extends Vue {
    constructor() {
        super(...arguments);
        this.timeIn = '9:37am February 2, 2019';
        this.isTimeIn = false;
        this.currentTime = '';
    }
    toggleTimeIn() {
        if (this.isTimeIn) {
            Vue.swal({
                title: 'Are you sure you Want to Time Out?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.value) {
                    Vue.swal('Time Out!', 'Your time has been Saved.', 'success');
                    this.isTimeIn = !this.isTimeIn;
                }
            });
        }
        else {
            this.isTimeIn = !this.isTimeIn;
            this.$toast.open({
                message: 'Time In Success',
                type: 'is-success',
            });
        }
    }
    time() {
        this.currentTime = moment().format('hh:mm:ss A, LL');
        setInterval(() => {
            this.currentTime = moment().format('hh:mm:ss A, LL');
        }, 1000);
    }
    created() {
        this.time();
    }
};
TimeInTimeOut = tslib_1.__decorate([
    Component({
        name: 'TimeInTimeOut',
        components: {},
    })
], TimeInTimeOut);
export default TimeInTimeOut;
//# sourceMappingURL=TimeInTimeOut.js.map