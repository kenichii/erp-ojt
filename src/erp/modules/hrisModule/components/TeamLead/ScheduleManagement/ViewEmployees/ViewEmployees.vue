<template>
    <div class="card">
        <div class="card-content">
            <div class="columns is-12">
                <div class="column">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">List of employees</p>
                        </div>
                        <i class="fas fa-user-plus"></i>
                    </div>
                    <b-table
                            :data="tableData"
                            :bordered="isBordered"
                            :paginated="isPaginated"
                            :per-page="perPage"
                            :current-page.sync="currentPage"
                            :default-sort-direction="defaultSortDirection"
                    >

                        <template slot-scope="props">

                            <b-table-column field="" label="No." >
                                {{ props.row.id }}
                            </b-table-column>
                            <b-table-column field="" label="Name" >
                                {{ props.row.employeeName }}
                            </b-table-column>
                        </template>
                    </b-table>

                    <a class="button is-primary is-small is-outlined pull-right" @click="$parent.close()">Cancel</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./ViewEmployees.ts">
</script>

