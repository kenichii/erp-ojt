<template>
    <section>
        <div v-if="!fileLeave">
            <div class="card">
                <header class="card-header">
                    <div class="card-header-title column">
                        <div class="is-pulled-left">LEAVE MANAGEMENT</div>
                    </div>
                </header>
                <div class="card-content">
                    <div class="columns">
                        <div class="column is-12">
                            <div class="field-body">
                                <b-field grouped group-multiline position="is-centered">
                                    <label class="label">From: </label>
                                    <b-datepicker
                                            placeholder="Click to select..."
                                            icon="calendar-today"
                                            size="is-small">
                                    </b-datepicker>

                                    <label class="label">To: </label>
                                    <b-datepicker
                                            placeholder="Click to select..."
                                            icon="calendar-today"
                                            size="is-small">
                                    </b-datepicker>
                                </b-field>
                                <b-field class="has-text-centered">
                                    <label class="label has-text-centered">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-calendar"></i>
                                </span>
                                        April 28, 2018 - May 20, 2018
                                    </label>
                                </b-field>
                                <div class="control has-icons-left">
                                    <input class="input search  is-rounded is-small" placeholder="Search">
                                    <span class="icon is-small is-left">
                                  <i class="fa fa-search"></i>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="columns is-9">
                        <div class="column is-fullwidth">
                            <b-table
                                    :data="tableData"
                                    :paginated="isPaginated"
                                    :per-page="perPage"
                                    :current-page.sync="currentPage"
                                    :default-sort-direction="defaultSortDirection"
                                    default-sort="status"
                                    class="table is-striped is-narrow">
                                <template slot-scope="props">
                                    <b-table-column field="leaveStartDate" label="Leave Start Date" centered>
                                        {{props.row.leavestartdate | moment("MMMM D, YYYY") }}
                                    </b-table-column>
                                    <b-table-column field="leaveEndDate" label="Leave End Date" centered>
                                        {{props.row.leaveenddate | moment("MMMM D, YYYY") }}
                                    </b-table-column>
                                    <b-table-column field="days" label="Days" centered numeric>
                                        {{ props.row.days }}
                                    </b-table-column>
                                    <b-table-column field="type" label="Leave Type" centered>
                                        {{ props.row.type }}
                                    </b-table-column>
                                    <b-table-column label="Reason of Leaving">
                                        {{ props.row.reason }}
                                    </b-table-column>
                                    <b-table-column field="status" label="Status" sortable>
                                        <b-tag type="tag is-rounded" :class="props.row.status">
                                            {{ props.row.status }}
                                        </b-tag>
                                    </b-table-column>

                                </template>
                                <template slot="bottom-left">
                                    <div class="fileLeaveButton has-text-centered">
                                        <button class="button is-primary" v-on:click="fileLeave = !fileLeave">
                                            FILE LEAVE
                                        </button>
                                    </div>
                                </template>
                            </b-table>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div v-else>
            <FileLeave/>
        </div>
    </section>
</template>

<script lang="ts" src="./LeaveManagement.ts">
</script>

<style lang="scss" src="./LeaveManagement.scss" scoped></style>
