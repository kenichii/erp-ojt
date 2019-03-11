export class SkillsModel {
    public skillName: string;
    public skillType: string;
    public proficiency: string;


    constructor(init?: Partial<SkillsModel>) {
        Object.assign(this, init);
    }
}
