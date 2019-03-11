import {Component, Vue} from 'vue-property-decorator';

@Component({
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
export default class FileLeave extends Vue {
}
