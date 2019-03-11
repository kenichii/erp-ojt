import {Component, Vue} from 'vue-property-decorator';
import moment from 'moment';

@Component({
    name: 'TimeInTimeOut',
    components: {},
})

export default class TimeInTimeOut extends Vue {
    public timeIn: string = '9:37am February 2, 2019';
    private isTimeIn: boolean = false;
    private currentTime: any = '';

    public toggleTimeIn() {
        if (this.isTimeIn) {
            Vue.swal({
                title: 'Are you sure you Want to Time Out?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then((result) => {
                if (result.value) {
                    Vue.swal(
                        'Time Out!',
                        'Your time has been Saved.',
                        'success',
                    );
                    this.isTimeIn = !this.isTimeIn;
                }
            });
        } else {
            this.isTimeIn = !this.isTimeIn;
            this.$toast.open({
                message: 'Time In Success',
                type: 'is-success',
            });
        }
    }

    private time() {
        this.currentTime = moment().format('hh:mm:ss A, LL');
        setInterval(() => {
            this.currentTime = moment().format('hh:mm:ss A, LL');
        }, 1000);
    }

    private created() {
        this.time();
    }
}

