<template>
    <div>
        <b-table
                :data="tableData"
                :paginated="isPaginated"
                :per-page="perPage"
                :current-page.sync="currentPage"
                :default-sort-direction="defaultSortDirection"
                default-sort="type" class="table is-striped is-narrow">

            <template slot-scope="props">
                <b-table-column label="Employee Name">
                    <div class="media is-align-items-center">
                        <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/48x48.png"
                                 class="is-rounded" />
                        </figure>
                        <p class="ml-10"> {{ props.row.employeeName }}</p>

                    </div>
                </b-table-column>
                <b-table-column label="Type" centered sortable>
                    {{ props.row.type }}
                </b-table-column>
                <b-table-column label="Reason" centered>
                    {{ props.row.detail }}
                </b-table-column>
                <b-table-column label="Approval" >
                    <b-field grouped group-multiline>
                        <p class="control">
                            <button class="button is-success" @click="approve(index)">
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </button>
                        </p>
                        <p class="control">
                            <button class="button is-danger" @click="reject(index)">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </button>
                        </p>
                    </b-field>
                </b-table-column>
            </template>
        </b-table>
    </div>
</template>

<script lang="ts" src="./RequestTableList.ts"></script>

