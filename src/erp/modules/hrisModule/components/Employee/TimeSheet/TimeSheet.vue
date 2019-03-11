<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                My time sheet logs
            </p>
        </header>
        <div class="card-content">
            <div class="columns">
                <div class="column is-6">
                    <div class="field-body">
                        <b-field label="From">
                            <b-datepicker
                                    placeholder="Click to select..."
                                    icon="calendar-today">
                            </b-datepicker>
                        </b-field>

                        <b-field label="To">
                            <b-datepicker
                                    placeholder="Click to select..."
                                    icon="calendar-today">
                            </b-datepicker>
                        </b-field>

                        <b-field label="Status:">
                            <b-select v-model="defaultSortDirection">
                                <option value="">Late</option>
                                <option value="">Absent</option>
                                <option value="">Undertime</option>
                                <option value="">Overtime</option>
                            </b-select>
                        </b-field>

                    </div>
                </div>
            </div>
            <div class="columns is-12">
                <div class="column is-12 is-fullwidth">
                    <b-table
                            :data="tableData"
                            :bordered="isBordered"
                            :paginated="isPaginated"
                            :per-page="perPage"
                            :current-page.sync="currentPage"
                            :default-sort-direction="defaultSortDirection"
                            default-sort="status">

                        <template slot-scope="props">
                            <b-table-column field="date" label="Date" centered>
                                {{props.row.date | moment("dddd, MMMM Do YYYY") }}
                            </b-table-column>

                            <b-table-column field="" label="Time In" centered>
                                {{ props.row.timeIn }}
                            </b-table-column>
                            <b-table-column field="" label="Time Out" centered>
                                {{ props.row.timeOut }}
                            </b-table-column>
                            <b-table-column field="status" label="Status">
                                {{ props.row.status }}
                            </b-table-column>
                        </template>
                    </b-table>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" src="./TimeSheet.ts">
</script>
