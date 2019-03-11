import {ContactDetailsModel} from '@/erp/modules/hrisModule/models/employeeModel/ContactDetailsModel';
import {EducationalBackgroundModel} from "@/erp/modules/hrisModule/models/employeeModel/EducationalBackgroundModel";
import {EmploymentHistory} from "@/erp/modules/hrisModule/models/employeeModel/EmploymentHistory";
import {GovernmentIDsModel} from "@/erp/modules/hrisModule/models/employeeModel/GovernmentIDsModel";
import {SkillsModel} from "@/erp/modules/hrisModule/models/employeeModel/SkillsModel";

export class EmployeeModel {
    firstName: string;
    middleName: string;
    lastName: string;
    birthDate: string;
    birthPlace: string;
    gender: string;
    nationality: string;
    civilStatus: string;
    contactDetails: Array<ContactDetailsModel> = [];
    educationalBackground: Array<EducationalBackgroundModel> = [];
    employmentHistory: Array<EmploymentHistory> = [];
    governmentIDs: Array<GovernmentIDsModel> = [];
    skills: Array<SkillsModel> = [];

    constructor(init?: Partial<EmployeeModel>) {
        Object.assign(this, init);
    }
}
