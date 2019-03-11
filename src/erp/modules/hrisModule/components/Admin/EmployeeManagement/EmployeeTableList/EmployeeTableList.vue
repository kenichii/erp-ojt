<template>
    <section class="columns">
        <div class="column is-12 is-fullwidth">
            <b-table
                    :data="employeeList"
                    :paginated="isPaginated"
                    :per-page="perPage"
                    :current-page.sync="currentPage"
                    :default-sort-direction="defaultSortDirection"
                    default-sort="status" class="table is-striped is-narrow">

                <template slot-scope="props">
                    <b-table-column label="Name">
                        <div class="media">
                            <div class="media-left">
                                <figure class="image is-48x48 is-2">
                                    <img :src="props.row.imgUrl"
                                         class="is-rounded">
                                </figure>
                            </div>
                            <div class="media-content">
                                <p class="has-text-weight-bold">{{props.row.name}}</p>
                                <p class="has-text-primary">{{props.row.position}}</p>
                            </div>
                        </div>
                    </b-table-column>
                    <b-table-column label="Department" centered>
                        {{props.row.department}}
                    </b-table-column>
                </template>
            </b-table>
        </div>
    </section>
</template>

<script lang="ts" src="./EmployeeTableList.ts"></script>

