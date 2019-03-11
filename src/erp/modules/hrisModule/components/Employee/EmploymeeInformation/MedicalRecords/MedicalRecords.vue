<template>
    <div class="card">

        <!--Medical Records-->
        <header class="card-header"><p class="card-header-title">
            Medical Records
        </p></header>
        <div class="card-content">
            <div class="content">

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Blood Type:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">AB</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Vision Right Eye:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">**********</span>
                            <!-- <input type="text" class="input" v-model="profileInformation.middleName">-->
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Vision Left Eye:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">**********</span>
                            <!--   <input type="text" class="input" v-model="profileInformation.lastName">-->
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Weight:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">***********</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Height:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">***********</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">BMI Category:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">***********</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Allergies:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">***********</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Abnormalities:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">***********</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Lifestyle:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">***********</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Health Status:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">***********</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./MedicalRecords.ts">
</script>
