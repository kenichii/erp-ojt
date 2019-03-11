import {Component, Vue} from 'vue-property-decorator';
import { mapState, mapGetters } from 'vuex';
import store from 'src/store';

const count = 10;

@Component({
    name: 'EmploymentHistory',
    data: function () {
        return {
            editView: false
        }
    },
})

export default class EmploymentHistory extends Vue {

}
