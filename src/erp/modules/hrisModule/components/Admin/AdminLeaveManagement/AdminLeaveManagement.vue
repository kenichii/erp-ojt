<template>
    <section>

        <div class="card">
            <div class="card-content">
                <div class="columns">
                    <div class="column is-12">
                        <div class="field-body">
                            <b-field grouped group-multiline>
                                <label class="label ">
                                    From:  </label>
                                <b-datepicker
                                        placeholder="Click to select..."
                                        icon="calendar-today"
                                        size="is-small">
                                </b-datepicker>

                                <label class="label ">
                                    To:  </label>
                                <b-datepicker
                                        placeholder="Click to select..."
                                        icon="calendar-today"
                                        size="is-small">
                                </b-datepicker>
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
                <div class="columns is-12">
                    <div class="column is-12 is-fullwidth">
                        <b-table
                                :data="tableData"
                                :paginated="isPaginated"
                                :per-page="perPage"
                                :current-page.sync="currentPage"
                                :default-sort-direction="defaultSortDirection"
                                default-sort="status" class="table is-narrow"
                                :selected.sync="selected">

                            <template slot-scope="props">
                                <b-table-column label="Name" centered class="selectedColor">
                                    <div class="media">
                                        <div class="media-left">
                                            <figure class="image is-48x48 is-2">
                                                <img src="../../../../../../assets/gulapanatics.jpg"
                                                     class="is-rounded" @click="toggleModal">
                                            </figure>
                                        </div>
                                        <div class="media-content">
                                            <p class="has-text-weight-bold">Kenneth G. Reyes</p>
                                            <p class="has-text-primary">Jr. Front-end Developer</p>
                                        </div>
                                    </div>
                                </b-table-column>

                                <b-table-column label="Leave Start Date" centered class="selectedColor">
                                    {{props.row.leavestartdate | moment("MMMM D, YYYY") }}
                                </b-table-column>
                                <b-table-column label="Leave End Date" centered class="selectedColor">
                                    {{props.row.leaveenddate | moment("MMMM D, YYYY") }}
                                </b-table-column>
                                <b-table-column label="Days" centered numeric class="selectedColor">
                                    {{ props.row.duration }}
                                </b-table-column>
                                <b-table-column label="Leave Type" centered class="selectedColor">
                                    {{ props.row.type }}
                                </b-table-column>
                                <b-table-column label="Reason of Leaving" class="selectedColor">
                                    {{ props.row.reason }}
                                </b-table-column>
                                <b-table-column label="Approval"  class="selectedColor">
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
                    <!--IMAGE MODAL-->
                    <b-modal :width="640" :active.sync="isCardModalActive">
                        <LeaveDetailsModal :selected="selected"/>
                    </b-modal>

                    <!--<LeaveDetailsModal  :isCardModalActive="isCardModalActive"
                                       @update="onModalToggleUpdate"/>-->
                    <!--END IMAGE MODAL-->
                </div>

            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./AdminLeaveManagement.ts"></script>
<style lang="scss" src="./AdminLeaveManagement.scss" scoped></style>
