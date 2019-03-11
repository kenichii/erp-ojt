<template>
    <div class="card">
        <!--Educational Background-->
        <div class="card-header">
            <div class="card-header-title column">
                <div class="is-pulled-left">Educational Background</div>
                <a v-on:click="editView = !editView" class="is-pulled-right has-text-primary">
                    <span class="icon">
                  <i class="fas fa-edit"></i>
                </span> Edit Profile</a>
            </div>
        </div>
        <div class="card-content">
            <div class="content">

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Start Date:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">March 10, 2019</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">End Date:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView"></span>
                            <input v-else type="text" class="input">
                            <!-- <input type="text" class="input" v-model="profileInformation.middleName">-->
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Academic Degree</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">BS Information Technology</span>
                            <input v-else type="text" class="input" placeholder="BS Information Technology">
                            <!--   <input type="text" class="input" v-model="profileInformation.lastName">-->
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Academic Field:</label>
                    </div>
                    <div class="field-body">
                        <div class="field"><span v-if="!editView">IT</span>
                            <input v-else type="text" class="input" placeholder="IT">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">School Name:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">University of the Assumption</span>
                            <input v-else type="text" class="input" placeholder="University of the Assumption">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Achievements:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView"></span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./EducationalBackground.ts">
</script>
