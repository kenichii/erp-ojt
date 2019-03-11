<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Undertime/Overtime
            </p>
        </header>
        <div class="card-content">

            <b-table
                    :data="data"
                    :paginated="isPaginated"
                    :per-page="perPage"
                    :current-page.sync="currentPage"
                    :pagination-simple="isPaginationSimple"
                    :default-sort-direction="defaultSortDirection"
                    default-sort="user.first_name">

                <template slot-scope="props">
                    <b-table-column field="id" label="ID" width="40">
                        {{ props.row.id }}.
                    </b-table-column>

                    <b-table-column field="date" label="Date" sortable>
                        {{ props.row.date }}
                    </b-table-column>
                    <b-table-column field="from" label="From">
                        {{ props.row.from }}
                    </b-table-column>
                    <b-table-column field="to" label="To" >
                        {{ props.row.to }}
                    </b-table-column>
                    <b-table-column field="hours" label="Hours" >
                        {{ props.row.hours }}
                    </b-table-column>
                    <b-table-column field="reason" label="Reason">
                        {{ props.row.reason }}
                    </b-table-column>
                    <b-table-column field="status" label="Status" sortable>
                        {{ props.row.status }}
                    </b-table-column>

                </template>
            </b-table>
        </div>
    </div>
</template>




<script lang="ts" src="./UndertimeOvertimeList.ts"></script>
