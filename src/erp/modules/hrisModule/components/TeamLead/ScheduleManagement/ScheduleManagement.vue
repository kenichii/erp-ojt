<template>
    <div class="card">
        <header class="card-header">
            <div class="card-header-title column">
                <div class="is-pulled-left">Daily Work Schedule</div>
                <a class="button is-dark is-small" @click="isCardModalActive = true">
                        <span class="icon">
                         <i class="fas fa-edit"></i>
                        </span> Create Work Schedule
                </a>
            </div>
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
                    <b-table-column field="shiftName" label="Shift Name" width="110">
                        {{ props.row.shiftName }}
                    </b-table-column>
                    <b-table-column field="monday" label="Monday">

                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.monday }} </span>
                        <b-field label="" v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                            <b-select placeholder="Select a schedule" rounded>
                                <option>7:00am - 4:00pm</option>
                                <option>6:00am - 3:00pm</option>
                                <option>restday</option>
                            </b-select>
                        </b-field>
                        <!-- <span >
                             <div class="select">
                               <select>

                               </select>
                             </div>
                         </span>-->
                    </b-table-column>
                    <b-table-column field="tuesday" label="Tuesday">
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.tuesday }} </span>
                        <b-field label="" v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                            <b-select placeholder="Select a schedule" rounded>
                                <option>7:00am - 4:00pm</option>
                                <option>6:00am - 3:00pm</option>
                                <option>restday</option>
                            </b-select>
                        </b-field>
                    </b-table-column>
                    <b-table-column field="wednesday" label="Wednesday">
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.wednesday }} </span>
                        <b-field label="" v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                            <b-select placeholder="Select a schedule" rounded>
                                <option>7:00am - 4:00pm</option>
                                <option>6:00am - 3:00pm</option>
                                <option>restday</option>
                            </b-select>
                        </b-field>
                    </b-table-column>
                    <b-table-column field="thursday" label="Thursday">
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.thursday }} </span>
                        <b-field label="" v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                            <b-select placeholder="Select a schedule" rounded>
                                <option>7:00am - 4:00pm</option>
                                <option>6:00am - 3:00pm</option>
                                <option>restday</option>
                            </b-select>
                        </b-field>
                    </b-table-column>
                    <b-table-column field="friday" label="Friday">
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.friday }} </span>
                        <b-field label="" v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                            <b-select placeholder="Select a schedule" rounded>
                                <option>7:00am - 4:00pm</option>
                                <option>6:00am - 3:00pm</option>
                                <option>restday</option>
                            </b-select>
                        </b-field>
                    </b-table-column>
                    <b-table-column field="saturday" label="Saturday">
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.saturday }} </span>
                        <b-field label="" v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                            <b-select placeholder="Select a schedule" rounded>
                                <option>7:00am - 4:00pm</option>
                                <option>6:00am - 3:00pm</option>
                                <option>restday</option>
                            </b-select>
                        </b-field>
                    </b-table-column>
                    <b-table-column field="sunday" label="Sunday">
                        <span v-show="!data[props.row.id - 1].edit"> {{ props.row.sunday }} </span>
                        <b-field label="" v-show="data[props.row.id - 1].edit" v-on:input="confirm()">
                            <b-select placeholder="Select a schedule" rounded>
                                <option>7:00am - 4:00pm</option>
                                <option>6:00am - 3:00pm</option>
                                <option>restday</option>
                            </b-select>
                        </b-field>
                    </b-table-column>
                    <b-table-column field="edit" label="Action" centered>
                        <b-field grouped group-multiline position="is-centered">
                            <i v-show="!data[props.row.id - 1].edit" class="fa fa-edit"
                               v-on:click="edit(props.row.id - 1)"></i>

                            <button v-show="data[props.row.id -1 ].edit" class="button"
                                    v-on:click="edit(props.row.id - 1)">Cancel
                            </button>
                            <i class="fa fa-times-circle"
                               v-on:click="toggleDelete()"></i>
                            <!--@click="toggleTimeIn()"-->
                        </b-field>
                    </b-table-column>
                    <!--  <b-table-column field="delete" label="Action">
                         &lt;!&ndash;
                          <button v-show="data[props.row.id -1 ].edit" class="button"
                                  v-on:click="edit(props.row.id - 1)">Cancel
                          </button>&ndash;&gt;
                      </b-table-column>-->
                    <!-- EMPLOYEE MODAL-->
                    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                        <CreateWorkSchedule/>
                    </b-modal>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script lang="ts" src="./ScheduleManagement.ts"></script>
