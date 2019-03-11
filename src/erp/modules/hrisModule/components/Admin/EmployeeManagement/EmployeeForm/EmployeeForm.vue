<template>
    <div class="card">
        <header class="card-header">
            <div class="card-header-title">
                <div class="is-pulled-left">
                    <span v-if="this.currentRoute === 'AddEmployee'">Add New</span>
                    <span v-else>Edit</span>
                    Employee
                </div>
                <div class="ml-auto">
                    <router-link to="./" class="button is-primary">Back</router-link>
                </div>
            </div>
        </header>
        <div class="card-content">

            <section aria-label="profile-info">
                <h1 class="subtitle">Profile Information</h1>
                <div class="columns is-multiline">
                    <div class="column is-4">
                        <b-field label="First Name"
                                 :type="{'is-danger': errors.has('firstName')}"
                                 :message="errors.first('firstName')">
                            <b-input v-model="employee.firstName" name="firstName" v-validate="'required'"/>
                        </b-field>
                    </div>
                    <div class="column is-4">
                        <b-field label="Middle Name"
                                 :type="{'is-danger': errors.has('middleName')}"
                                 :message="errors.first('middleName')">
                            <b-input v-model="employee.middleName" name="middleName" v-validate="'required'"/>
                        </b-field>
                    </div>
                    <div class="column is-4">
                        <b-field label="Last Name"
                                 :type="{'is-danger': errors.has('lastName')}"
                                 :message="errors.first('lastName')">
                            <b-input v-model="employee.lastName" name="lastName" v-validate="'required'"/>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Birth Date"
                                 :type="{'is-danger': errors.has('birthDate')}"
                                 :message="errors.first('birthDate')">
                            <b-datepicker
                                    v-model="employee.birthDate"
                                    v-validate="'required'"
                                    name="birthDate"
                                    placeholder="Type or select a date..."
                                    icon="calendar-today"
                                    editable>
                            </b-datepicker>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Birth Place"
                                 :type="{'is-danger': errors.has('birthPlace')}"
                                 :message="errors.first('birthPlace')">
                            <b-input v-model="employee.birthPlace" name="birthPlace" v-validate="'required'"/>
                        </b-field>
                    </div>
                    <div class="column is-12">
                        <div class="field">
                            <label class="label">Gender</label>
                            <b-radio v-model="employee.gender"
                                     native-value="male">
                                Male
                            </b-radio>
                            <b-radio v-model="employee.gender"
                                     native-value="female">
                                Female
                            </b-radio>

                        </div>
                    </div>
                    <div class="column is-6">
                        <b-field label="Nationality"
                                 :type="{'is-danger': errors.has('nationality')}"
                                 :message="errors.first('nationality')">
                            <b-input v-model="employee.nationality" name="nationality" v-validate="'required'"/>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Civil Status"
                                 :type="{'is-danger': errors.has('civilStatus')}"
                                 :message="errors.first('civilStatus')">
                            <b-input v-model="employee.civilStatus" name="civilStatus" v-validate="'required'"/>
                        </b-field>
                    </div>
                </div>
            </section>
            <section aria-label="Contact-Details">
                <h1 class="subtitle is-flex"><span class="mr-10">Contact Details</span>
                    <span class="icon has-text-primary is-size-3 pointer">
                                  <i class="fas fa-plus-circle"></i>
                            </span></h1>
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="Contact Number"
                                 :type="{'is-danger': errors.has('contactNo')}"
                                 :message="errors.first('contactNo')">
                            <b-input v-model="employee.contactDetails.contactNo" name="contactNo"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Contact Type"
                                 :type="{'is-danger': errors.has('contactType')}"
                                 :message="errors.first('contactType')">
                            <b-input v-model="employee.contactDetails.contactType" name="contactType"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Email Address"
                                 :type="{'is-danger': errors.has('emailAddress')}"
                                 :message="errors.first('emailAddress')">
                            <b-input v-model="employee.contactDetails.emailAddress" name="emailAddress"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Email Type"
                                 :type="{'is-danger': errors.has('emailType')}"
                                 :message="errors.first('emailType')">
                            <b-input v-model="employee.contactDetails.emailType" name="emailType"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Address"
                                 :type="{'is-danger': errors.has('address')}"
                                 :message="errors.first('address')">
                            <b-input v-model="employee.contactDetails.address" name="address"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Address Type"
                                 :type="{'is-danger': errors.has('addressType')}"
                                 :message="errors.first('addressType')">
                            <b-input v-model="employee.contactDetails.addressType" name="addressType"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                </div>
            </section>
            <section aria-label="Educational-Background">
                <h1 class="subtitle is-flex"><span class="mr-10">Educational Background</span>
                    <span class="icon has-text-primary is-size-3 pointer">
                                  <i class="fas fa-plus-circle"></i>
                            </span></h1>
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="Start Date"
                                 :type="{'is-danger': errors.has('startDate')}"
                                 :message="errors.first('startDate')">
                            <b-datepicker
                                    v-model="employee.educationalBackground.startDate"
                                    v-validate="'required'"
                                    name="startDate"
                                    placeholder="Type or select a date..."
                                    icon="calendar-today"
                                    editable>
                            </b-datepicker>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="End Date"
                                 :type="{'is-danger': errors.has('endDate')}"
                                 :message="errors.first('endDate')">
                            <b-datepicker
                                    v-model="employee.educationalBackground.endDate"
                                    v-validate="'required'"
                                    name="endDate"
                                    placeholder="Type or select a date..."
                                    icon="calendar-today"
                                    editable>
                            </b-datepicker>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Academic Degree"
                                 :type="{'is-danger': errors.has('academicDegree')}"
                                 :message="errors.first('academicDegree')">
                            <b-input v-model="employee.contactDetails.academicDegree" name="academicDegree"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Academic Field"
                                 :type="{'is-danger': errors.has('academicField')}"
                                 :message="errors.first('academicField')">
                            <b-input v-model="employee.contactDetails.academicField" name="academicField"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="School Name"
                                 :type="{'is-danger': errors.has('schoolName')}"
                                 :message="errors.first('schoolName')">
                            <b-input v-model="employee.contactDetails.schoolName" name="schoolName"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Achievements"
                                 :type="{'is-danger': errors.has('achievements')}"
                                 :message="errors.first('achievements')">
                            <b-input v-model="employee.contactDetails.achievements" name="achievements"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>

                </div>
            </section>
            <section aria-label="Employment-History">
                <h1 class="subtitle is-flex"><span class="mr-10">Employment History</span>
                    <span class="icon has-text-primary is-size-3 pointer">
                                  <i class="fas fa-plus-circle"></i>
                            </span></h1>
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="Start Date"
                                 :type="{'is-danger': errors.has('startDate')}"
                                 :message="errors.first('startDate')">
                            <b-datepicker
                                    v-model="employee.employmentHistory.startDate"
                                    v-validate="'required'"
                                    name="startDate"
                                    placeholder="Type or select a date..."
                                    icon="calendar-today"
                                    editable>
                            </b-datepicker>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="End Date"
                                 :type="{'is-danger': errors.has('endDate')}"
                                 :message="errors.first('endDate')">
                            <b-datepicker
                                    v-model="employee.employmentHistory.endDate"
                                    v-validate="'required'"
                                    name="endDate"
                                    placeholder="Type or select a date..."
                                    icon="calendar-today"
                                    editable>
                            </b-datepicker>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Position"
                                 :type="{'is-danger': errors.has('position')}"
                                 :message="errors.first('position')">
                            <b-input v-model="employee.employmentHistory.position" name="position"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Department"
                                 :type="{'is-danger': errors.has('department')}"
                                 :message="errors.first('department')">
                            <b-input v-model="employee.employmentHistory.department" name="department"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Employment Type"
                                 :type="{'is-danger': errors.has('employmentType')}"
                                 :message="errors.first('employmentType')">
                            <b-input v-model="employee.employmentHistory.employmentType" name="employmentType"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Employee Status"
                                 :type="{'is-danger': errors.has('employeeStatus')}"
                                 :message="errors.first('employeeStatus')">
                            <b-input v-model="employee.employmentHistory.employeeStatus" name="employeeStatus"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Supervisor"
                                 :type="{'is-danger': errors.has('supervisor')}"
                                 :message="errors.first('supervisor')">
                            <b-input v-model="employee.employmentHistory.supervisor" name="supervisor"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                </div>
            </section>
            <section aria-label="Government-Ids">
                <h1 class="subtitle is-flex"><span class="mr-10">Government ID's</span>
                    <span class="icon has-text-primary is-size-3 pointer">
                                  <i class="fas fa-plus-circle"></i>
                            </span></h1>
                <div class="columns is-multiline">

                    <div class="column is-6">
                        <b-field label="Issue Date"
                                 :type="{'is-danger': errors.has('issueDate')}"
                                 :message="errors.first('issueDate')">
                            <b-datepicker
                                    v-model="employee.governmentIDs.issueDate"
                                    v-validate="'required'"
                                    name="issueDate"
                                    placeholder="Type or select a date..."
                                    icon="calendar-today"
                                    editable>
                            </b-datepicker>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Expiry Date"
                                 :type="{'is-danger': errors.has('expiryDate')}"
                                 :message="errors.first('expiryDate')">
                            <b-datepicker
                                    v-model="employee.governmentIDs.expiryDate"
                                    v-validate="'required'"
                                    name="expiryDate"
                                    placeholder="Type or select a date..."
                                    icon="calendar-today"
                                    editable>
                            </b-datepicker>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="ID Type"
                                 :type="{'is-danger': errors.has('idType')}"
                                 :message="errors.first('idType')">
                            <b-input v-model="employee.governmentIDs.idType" name="idType"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="ID Number"
                                 :type="{'is-danger': errors.has('idNumber')}"
                                 :message="errors.first('idNumber')">
                            <b-input v-model="employee.governmentIDs.idNumber" name="idNumber"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Country"
                                 :type="{'is-danger': errors.has('country')}"
                                 :message="errors.first('country')">
                            <b-input v-model="employee.employmentHistory.country" name="country"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                </div>
            </section>
            <section aria-label="Skills">
                <h1 class="subtitle is-flex"><span class="mr-10">Skills</span>
                    <span class="icon has-text-primary is-size-3 pointer">
                                  <i class="fas fa-plus-circle"></i>
                            </span></h1>
                <div class="columns is-multiline">
                    <div class="column is-6">
                        <b-field label="Skill Name"
                                 :type="{'is-danger': errors.has('skillName')}"
                                 :message="errors.first('skillName')">
                            <b-input v-model="employee.skills.skillName" name="skillName"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Skill Type"
                                 :type="{'is-danger': errors.has('skillType')}"
                                 :message="errors.first('skillType')">
                            <b-input v-model="employee.skills.skillType" name="skillType"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                    <div class="column is-6">
                        <b-field label="Proficiency"
                                 :type="{'is-danger': errors.has('proficiency')}"
                                 :message="errors.first('proficiency')">
                            <b-input v-model="employee.skills.proficiency" name="proficiency"
                                     v-validate="'required'"></b-input>
                        </b-field>
                    </div>
                </div>
            </section>

            <button @click.prevent="validateBeforeSubmit" class="mt-10 button is-primary"> Submit</button>
        </div>
    </div>
</template>

<script lang="ts" src="./EmployeeForm.ts"></script>

<style lang="scss" src="./EmployeeForm.scss" scoped></style>
