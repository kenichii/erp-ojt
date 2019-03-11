import {Component, Vue} from 'vue-property-decorator';

@Component({
    name: "BusinessInformation",
    components: {},
    data: function () {
        return {
            editView: false
        }
    },
})
export default class BusinessInformation extends Vue {
}
