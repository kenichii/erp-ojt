<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Team Schedule Management
            </p>
        </header>
        <div class="card-content">
            <div class="column is-one-quarter">
                <div class=" control has-icons-left has-icons-right is-one-quarter">
                    <input class="input search is-rounded" type="text" placeholder="Search">
                    <span class="icon is-small is-left">
                     <i class="fa fa-search"></i>
                </span>
                </div>
            </div>

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

                    <b-table-column field="lastname" label="Lastname" sortable>
                        {{ props.row.lastname }}
                    </b-table-column>
                    <b-table-column field="fistname" label="Firstname">
                        {{ props.row.firstname }}
                    </b-table-column>
                    <b-table-column field="monday" label="Monday" >
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.monday }} </span>
                        <span v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                                <div class="select">
                                  <select>
                                    <option>7:00am - 4:00pm</option>
                                    <option>6:00am - 3:00pm</option>
                                    <option>restday</option>
                                  </select>
                                </div>
                            </span>
                    </b-table-column>
                    <b-table-column field="tuesday" label="Tuesday" >
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.tuesday }} </span>
                        <span v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                                <div class="select">
                                  <select>
                                    <option>7:00am - 4:00pm</option>
                                    <option>6:00am - 3:00pm</option>
                                    <option>restday</option>
                                  </select>
                                </div>
                            </span>
                    </b-table-column>
                    <b-table-column field="tuesday" label="Wednesday" >
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.wednesday }} </span>
                        <span v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                                <div class="select">
                                  <select>
                                    <option>7:00am - 4:00pm</option>
                                    <option>6:00am - 3:00pm</option>
                                    <option>restday</option>
                                  </select>
                                </div>
                            </span>
                    </b-table-column>
                    <b-table-column field="tuesday" label="Thursday" >
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.thursday }} </span>
                        <span v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                                <div class="select">
                                  <select>
                                    <option>7:00am - 4:00pm</option>
                                    <option>6:00am - 3:00pm</option>
                                    <option>restday</option>
                                  </select>
                                </div>
                            </span>
                    </b-table-column>
                    <b-table-column field="tuesday" label="Friday" >
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.friday }} </span>
                        <span v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                                <div class="select">
                                  <select>
                                    <option>7:00am - 4:00pm</option>
                                    <option>6:00am - 3:00pm</option>
                                    <option>restday</option>
                                  </select>
                                </div>
                            </span>
                    </b-table-column>
                    <b-table-column field="tuesday" label="Saturday" >
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.saturday }} </span>
                        <span v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                                <div class="select">
                                  <select>
                                    <option>7:00am - 4:00pm</option>
                                    <option>6:00am - 3:00pm</option>
                                    <option>restday</option>
                                  </select>
                                </div>
                            </span>
                    </b-table-column>
                    <b-table-column field="tuesday" label="Sunday" >
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.sunday }} </span>
                        <span v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                                <div class="select">
                                  <select>
                                    <option>7:00am - 4:00pm</option>
                                    <option>6:00am - 3:00pm</option>
                                    <option>restday</option>
                                  </select>
                                </div>
                            </span>
                    </b-table-column>

                    <b-table-column field="edit" label="Action" >
                        <i v-show="!data[props.row.id - 1].edit" class="fa fa-edit" v-on:click="edit(props.row.id - 1)"></i>
                        <button v-show="data[props.row.id -1 ].edit" class="button" v-on:click="edit(props.row.id - 1)">Cancel</button>
                    </b-table-column>

                </template>
            </b-table>
        </div>
    </div>
</template>

<script lang='ts' src='./TeamScheduleManagement.ts'/>
<style lang="scss" src="./TeamScheduleManagement.scss" scoped></style>
