<template>
    <div class="card">
        <!--SKILLS-->
        <header class="card-header">
            <div class="card-header-title column">
                <div class="is-pulled-left">Employment History</div>
                <a v-on:click="editView = !editView" class="is-pulled-right has-text-primary"><span class="icon">
                  <i class="fas fa-edit"></i>
                </span> Edit Profile</a>
            </div>
        </header>
        <div class="card-content">
            <div class="content">
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Start Date:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">April 24 ,2019</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">End Date:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">September 24, 2019</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Employee ID:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">123-456-789</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Position</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">Junior Front-end Developer</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Department:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">Software/Web Development</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Employment Type:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">Fulltime</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Supervisor:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">..........</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./EmploymentHistory.ts"></script>>
