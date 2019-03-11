<template>
    <div class="card">
        <div class="card-content">
            <div class="columns is-12">
                <div class="column">
                    <b-field label="Confirmation Code">
                        <b-input v-model="name"></b-input>
                    </b-field>
                    <div class="field is-grouped is-pulled-right">
                        <div class="control">
                            <a class="button is-primary">Reset Password</a></div>
                        <div class="control">
                            <a @click="$parent.close()" class="button router-link-active">Cancel</a></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ConfirmReset.ts">
</script>
