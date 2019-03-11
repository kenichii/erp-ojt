export class EmploymentHistory {
    public startDate: string | undefined;
    public endDate: string | undefined;
    public position: string | undefined;
    public department: string | undefined;
    public employmentType: string | undefined;
    public employeeStatus: string | undefined;
    public supervisor: string | undefined;

    constructor(init?: Partial<EmploymentHistory>) {
        Object.assign(this, init);
    }
}
