<template>
    <div class="card">

        <!--Family Background-->
        <header class="card-header"><p class="card-header-title">
            Family Background
        </p></header>
        <div class="card-content">
            <div class="content">

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Relationship:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">*******</span>
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Name:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">.......</span>
                            <!-- <input type="text" class="input" v-model="profileInformation.middleName">-->
                        </div>
                    </div>
                </div>
                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Contact No:</label>
                    </div>
                    <div class="field-body">
                        <div class="field">
                            <span v-if="">BS Information Technology</span>
                            <!--   <input type="text" class="input" v-model="profileInformation.lastName">-->
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-label is-3">
                        <label class="label">Address:</label>
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

<script lang="ts" src="./FamilyBackground.ts">
</script>
