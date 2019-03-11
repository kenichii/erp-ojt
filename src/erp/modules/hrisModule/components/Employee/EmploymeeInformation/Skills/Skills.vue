<template>
    <div class="card">
        <!--SKILLS-->
        <header class="card-header">
            <div class="card-header-title column">
                <div class="is-pulled-left">Skills</div>
                <a v-on:click="editView = !editView" class="is-pulled-right has-text-primary"><span class="icon">
                  <i class="fas fa-edit"></i>
                </span> Edit Profile</a>
            </div>
        </header>
        <div class="card-content">
            <div class="content">

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Skill Name:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">..........</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Skill Type:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">.......</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./Skills.ts"></script>>
