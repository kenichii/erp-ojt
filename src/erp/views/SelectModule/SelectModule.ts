import {Component, Vue} from 'vue-property-decorator';
import NavBar from '../../../layout/NavBar/NavBar.vue';

const erpModules = [
    {icon: require('../../../assets/Icons_ERP/ERP_HRIS.svg'), text: 'HRIS'},
    {icon: require('../../../assets/Icons_ERP/ERP_Recruitment.svg'), text: 'RECRUITMENT'},
    {icon: require('../../../assets/Icons_ERP/ERP_CRM.svg'), text: 'CRM'},
    {icon: require('../../../assets/Icons_ERP/ERP_Payroll.svg'), text: 'PAYROLL TIMEKEEPING'},
    {icon: require('../../../assets/Icons_ERP/ERP_Billing_Invoice.svg'), text: 'BILLING INVOICE'},
    {icon: require('../../../assets/Icons_ERP/ERP_Reporting.svg'), text: 'REPORTING'},
    {icon: require('../../../assets/Icons_ERP/ERP_Asset_Management.svg'), text: 'ASSET MANAGEMENT'},
];

@Component({
    name: 'SelectModule',
    components: {
        NavBar,
    },
    data() {
        return {
            erpModules,
        };
    },
})
export default class SelectModule extends Vue {
}
