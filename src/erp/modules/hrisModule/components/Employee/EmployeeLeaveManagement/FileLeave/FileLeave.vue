<template>
    <section>
        <div class="card">
            <header class="card-header">
                <div class="card-header-title column">
                    <div class="is-pulled-left">FILE LEAVE</div>
                </div>
            </header>
            <div class="card-content">
                <div class="columns is-12">
                    <div class="column is-3">
                        <b-field label="Start Date">
                            <div class="control has-icons-right">
                                <b-datepicker placeholder="Click to select..."></b-datepicker>
                                <span class="icon is-small is-right">
                                    <i class="fa fa-calendar"></i>
                                </span>
                            </div>
                        </b-field>
                    </div>
                    <div class="column is-3">
                        <b-field label="End Date">
                            <div class="control has-icons-right">
                                <b-datepicker placeholder="Click to select..."></b-datepicker>
                                <span class="icon is-small is-right">
                                    <i class="fa fa-calendar"></i>
                                </span>
                            </div>
                        </b-field>
                    </div>
                    <div class="column is-3">
                        <b-field label="Total no. of days" class="has-text-centered">
                            <h1 class="title is-4">0</h1>
                        </b-field>
                    </div>

                    <div class="column is-3">
                        <b-field label="Leave Type">
                            <b-select>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </b-select>
                        </b-field>
                    </div>

                </div>
                <b-field label="Reason">
                    <b-input type="textarea" placeholder="Explain..."></b-input>
                </b-field>


                <section>
                    <b-field grouped>
                        <b-upload v-model="dropFiles"
                                  multiple
                                  drag-drop>
                            <i class="fas fa-paperclip"></i>
                            Attachment
                        </b-upload>
                        <b-field class="is-pulled-right">
                            <p class="control">
                                <button class="button">
                                    <router-link to="./EmployeeLeaveManagement">

                                        CANCEL
                                    </router-link>
                                </button>
                            </p>
                            <p class="control">
                                <button class="button is-primary " @click="toggleSubmit()">
                                    FILE LEAVE
                                </button>
                            </p>
                        </b-field>
                    </b-field>
                    <div class="tags">
                            <span v-for="(file, index) in dropFiles"
                                  :key="index"
                                  class="tag is-primary">
                                {{file.name}}
                                <button class="delete is-small"
                                        type="button"
                                        @click="deleteDropFile(index)">
                                </button>
                            </span>
                    </div>

                </section>

            </div>
        </div>

    </section>
</template>

<script lang="ts" src="./FileLeave.ts">
</script>

<style lang="scss" src="./FileLeave.scss" scoped>

</style>
