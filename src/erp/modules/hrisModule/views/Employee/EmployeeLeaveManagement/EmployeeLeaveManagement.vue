<template>
    <section>
        <!-- TODO: 2550,2554, 2556, 2547, 2549 -->
        <div class="columns is-12">
            <div class="column is-9">
                    <LeavesCount/>
                    <LeaveManagement/>
            </div>
            <div class="column is-3">
                <UpcomingLeaves/>
                <UpcomingHolidays/>
            </div>
        </div>

    </section>

</template>

<script lang="ts" src="./EmployeeLeaveManagement.ts"></script>
<style lang="scss" src="./EmployeeLeaveManagement.scss" scoped></style>
