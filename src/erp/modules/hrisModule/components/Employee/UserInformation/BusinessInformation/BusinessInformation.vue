<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header-title column">
                <div class="is-pulled-left">Business Information</div>
                <a v-on:click="editView = !editView" class="is-pulled-right has-text-primary"><span class="icon">
                  <i class="fas fa-edit"></i>
                </span> Edit Profile</a>
            </div>

        </div>
        <div class="card-content">
            <div class="content">

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Business Type:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView"></span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Business Name:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView"></span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Address:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView"></span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">City:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView"></span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">State:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView"></span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Zipcode:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView"></span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Country:</label>
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

<script lang="ts" src="./BusinessInformation.ts">
</script>

<style scoped>

</style>
