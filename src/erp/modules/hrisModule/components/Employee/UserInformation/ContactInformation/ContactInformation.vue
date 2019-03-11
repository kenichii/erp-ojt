<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header-title column">
                <div class="is-pulled-left">Contact Information</div>
                <a v-on:click="editView = !editView" class="is-pulled-right has-text-primary"><span class="icon">
                  <i class="fas fa-edit"></i>
                </span> Edit Profile</a>
            </div>
        </div>
        <div class="card-content">
            <div class="content">
                <div v-for="information in profileInformation.contactDetails" :key="information.id" >
                    <!--FOR LOOP-->
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Contact No:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">{{information.contactNumber}}</span>
                            <input v-else type="text" class="input" v-model="information.contactNumber">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Contact Type:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">{{information.contactType}}</span>
                            <input v-else type="text" class="input" v-model="information.contactType">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Email Address:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">{{information.emailAddress}}</span>
                            <input v-else type="text" class="input" v-model="information.emailAddress">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Email Type:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">{{information.emailType}}</span>
                            <input v-else type="text" class="input" v-model="information.emailType">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Address:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">{{information.address}}</span>
                            <input v-else type="text" class="input" v-model="information.address">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Address Type:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">{{information.addressType}}</span>
                            <input v-else type="text" class="input" v-model="information.addressType">

                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' src='./ContactInformation.ts'/>
