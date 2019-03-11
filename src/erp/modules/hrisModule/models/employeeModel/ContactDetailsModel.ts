export class ContactDetailsModel {
    public contactNo: string | undefined;
    public contactType: string | undefined;
    public emailAddress: string | undefined;
    public emailType: string | undefined;
    public address: string | undefined;
    public addressType: string | undefined;

    constructor(init?: Partial<ContactDetailsModel>) {
        Object.assign(this, init);
    }
}
