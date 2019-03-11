<template>
    <div class="card">
        <!--TODO: 2573-->
        <!--Government IDS-->
        <header class="card-header">
            <div class="card-header-title column">
                <div class="is-pulled-left">Government IDs</div>
                <a v-on:click="editView = !editView" class="is-pulled-right has-text-primary"><span class="icon">
                  <i class="fas fa-edit"></i>
                </span> Edit Profile</a>
            </div>
        </header>
        <div class="card-content">
            <div class="content">

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Country:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">PHILIPPINES</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Government ID Type:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">***********</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">ID Number:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">***********</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Issue Date:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">***********</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Expiry Date:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="!editView">***********</span>
                            <input v-else type="text" class="input">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./GovernmentIds.ts">
</script>
