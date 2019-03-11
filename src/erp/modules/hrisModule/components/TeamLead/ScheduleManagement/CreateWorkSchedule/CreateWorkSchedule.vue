<template>
    <div class="card" style="background-color: #597EAA;color:black;">
        <div class="card-content">
            <div class="columns is-12">
                <div class="column">

                    <b-field grouped>
                        <b-field horizontal>
                            <label class="title is-4">Description</label>
                            <b-input></b-input>
                        </b-field>

                    </b-field>

                    <b-field grouped class="is-grouped-centered">
                        <b-field label="Start Time">
                            <b-select placeholder="Select a subject">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </b-select>
                        </b-field>
                        <b-field label="End Time">
                            <b-select placeholder="Select a subject">
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                            </b-select>
                        </b-field>
                    </b-field>

                    <b-field grouped class="columns ">
                        <div class="column is-2"></div>
                        <b-field class="column is-4">
                            <section>
                                <label class="title is-5">List of Weekdays</label>
                                <div>
                                    <label>Monday</label>
                                </div>

                                <div>
                                    <label>Tuesday</label>
                                </div>
                                <div>
                                    <labe>Wednesday</labe>
                                </div>
                                <div>
                                    <labe>Thursday</labe>
                                </div>
                                <div>
                                    <labe>Friday</labe>
                                </div>
                                <div>
                                    <labe>Saturday</labe>
                                </div>
                                <div>
                                    <labe>Sunday</labe>
                                </div>
                            </section>
                        </b-field>
                        <b-field class="column is-4">
                            <section class="has-text-centered">
                                <label class="title is-5">Working Days</label>

                                <div>
                                    <b-switch class="is-small"></b-switch>
                                </div>
                                <div>
                                    <b-switch class="is-small"></b-switch>
                                </div>
                                <div>
                                    <b-switch class="is-small"></b-switch>
                                </div>
                                <div>
                                    <b-switch class="is-small"></b-switch>
                                </div>
                                <div>
                                    <b-switch class="is-small"></b-switch>
                                </div>
                                <div>
                                    <b-switch class="is-small"></b-switch>
                                </div>
                                <div>
                                    <b-switch class="is-small"></b-switch>
                                </div>
                            </section>
                        </b-field>
                        <div class="column is-2"></div>
                    </b-field>


                    <!--    -->
                    <div class="is-pulled-right">
                        <b-field grouped group-multiline>
                            <p class="control">
                                <router-link to="./" class="button is-info">Cancel</router-link>
                            </p>
                            <p class="control">
                                <a class="button is-primary">Submit</a>
                            </p>
                        </b-field>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./CreateWorkSchedule.ts">
</script>
<style lang="scss" src="./CreateWorkSchedule.scss"></style>

