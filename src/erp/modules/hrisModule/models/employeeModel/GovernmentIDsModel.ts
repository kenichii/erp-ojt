export class GovernmentIDsModel {
    public country: string;
    public idType: string;
    public idNumber: string;
    public issueDate: string;
    public expiryDate: string;

    constructor(init?: Partial<GovernmentIDsModel>) {
        Object.assign(this, init);
    }
}
