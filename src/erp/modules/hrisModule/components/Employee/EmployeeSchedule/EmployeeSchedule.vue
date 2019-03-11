<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Employee Schedule
            </p>
        </header>
        <div class="card-content">
            <div class="level">
                <div class="level-item level-left">
                    <b-field grouped>
                        <label class="label is-medium">
                            Status: </label>
                        <b-select v-model="defaultSortDirection">
                            <option value=""></option>
                            <option value="">Late</option>
                            <option value="">Absent</option>
                            <option value="">Undertime</option>
                            <option value="">Overtime</option>
                        </b-select>
                    </b-field>
                </div>
                <div class="level-item level-right">
                    <div>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-5 is-rounded" type="email" placeholder="Search">
                            <span class="icon is-small is-left">
                      <i class="fa fa-search"></i>
                    </span>
                        </div>
                    </div>
                </div>
            </div>


            <div class="columns">
                <div class="column is-12 is-fullwidth">
                    <b-table
                            :data="tableData"
                            :bordered="isBordered"
                            :paginated="isPaginated"
                            :per-page="perPage"
                            :current-page.sync="currentPage"
                            :default-sort-direction="defaultSortDirection"
                    >

                        <template slot-scope="props">

                            <b-table-column field="Employee Name" label="Employee Name" reveal>
                                {{ props.row.employeeName }}
                            </b-table-column>
                            <b-table-column field="" label="Position" centered>
                                {{ props.row.position }}
                            </b-table-column>
                            <b-table-column field="" label="Status" centered>
                                {{ props.row.status }}
                            </b-table-column>
                            <button class="button"
                                    @click="isCardModalActive = true">
                                View
                            </button>


                            <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                                <div class="card">
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48 is-2">
                                                    <img src="https://bulma.io/images/placeholders/48x48.png"
                                                         class="is-rounded">
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-4 is-marginless">Kenneth G. Reyes</p>
                                                <p class="is-6">Jr. Front-end Developer</p>
                                            </div>
                                            <b-field class="media-content" label="Date">
                                                {{new Date("February 12, 2019").toLocaleDateString()}}
                                            </b-field>
                                            <b-field class="media-content" label="Status">
                                                Late
                                            </b-field>
                                        </div>


                                        <div class="columns is-12">

                                            <div class="column is-12 is-fullwidth">
                                                <div class="media">
                                                    <b-field class="media-content" label="Time Logged In:">
                                                        8:20am
                                                    </b-field>
                                                    <b-field class="media-content" label="Time Logged Out:">
                                                        5:00pm
                                                    </b-field>
                                                </div>
                                                <b-table
                                                        :data="tableData"
                                                        :bordered="isBordered"
                                                        :paginated="isPaginated"
                                                        :per-page="perPage"
                                                        :current-page.sync="currentPage"
                                                        :default-sort-direction="defaultSortDirection"
                                                        default-sort="status">


                                                    <template slot-scope="props">

                                                        <b-table-column field="day" label="Schedule" centered>
                                                            {{ props.row.schedule }}
                                                        </b-table-column>

                                                        <b-table-column field="" label="Time" centered>
                                                            {{ props.row.timeIn }} - {{ props.row.timeOut }}
                                                        </b-table-column>

                                                    </template>
                                                </b-table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-modal>
                        </template>
                    </b-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./EmployeeSchedule.ts">
</script>

<style scoped>
</style>
