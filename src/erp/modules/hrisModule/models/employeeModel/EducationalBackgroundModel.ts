export class EducationalBackgroundModel {
    public startDate: string | undefined;
    constructor(init?: Partial<EducationalBackgroundModel>) {
        Object.assign(this, init);
    }
}

