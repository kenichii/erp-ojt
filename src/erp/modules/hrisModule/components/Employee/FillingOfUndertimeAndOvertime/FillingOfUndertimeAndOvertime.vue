<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">Filing of UnderTime / OverTime</p>
        </header>
        <div class="card-content">
            <div class="content">
                <div class="columns">
                    <div class="column is-6">
                        <div class="field-body">
                            <b-field label="From">
                                <b-timepicker
                                        rounded
                                        placeholder="Click to select..."
                                        icon="clock"
                                        :hour-format="format">
                                </b-timepicker>
                            </b-field>

                            <b-field label="To">
                                <b-timepicker
                                        rounded
                                        placeholder="Click to select..."
                                        icon="clock"
                                        :hour-format="format">
                                </b-timepicker>
                            </b-field>
                        </div>
                    </div>

                    <div class="column is-6">
                        <b-field label="Date" class="is-pulled-right-desktop">
                            <b-datepicker
                                    placeholder="Click to select..."
                                    icon="calendar-today">
                            </b-datepicker>
                        </b-field>

                    </div>

                </div>
                <p class="label is-medium has-text-grey"> Total no. of hours : 10</p>


                <div class="field">
                    <label class="label">Type</label>

                    <div class="field">
                        <b-radio v-model="type"
                                 native-value="OverTime">
                            OverTime
                        </b-radio>
                    </div>
                    <div class="field">
                        <b-radio v-model="type"
                                 native-value="UnderTime">
                            UnderTime
                        </b-radio>
                    </div>
                </div>

                <b-field label="Reason">
                    <b-input type="textarea" placeholder="Explain..."></b-input>
                </b-field>

                <!--<b-field class="file" v-if="this.type === 'OverTime'">
                    <b-upload v-model="file">
                        <a class="button is-primary">
                            <b-icon icon="upload"></b-icon>
                            <span>Attach File..</span>
                        </a>
                    </b-upload>
                    <span class="file-name" v-if="file">
            {{ file.name }}
        </span>
                </b-field>-->
                <div class="field is-grouped mt-20">
                    <div class="control">
                        <router-link to="/hris/FillingOfUndertime/DisplayUndertime/DisplayUndertime"
                                     class="button is-primary">
                            Submit
                        </router-link>
                    </div>
                    <div class="control">
                        <router-link to="/hris" class="button">Cancel</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./FillingOfUndertimeAndOvertime.ts">
</script>

<style scoped>

</style>
