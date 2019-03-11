<template>
    <section>
        <header class="title is-5">REQUEST MANAGEMENT
        </header>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    UNDERTIME/OVERTIME
                </p>
            </header>
            <div class="card-content">
                <RequestTableList/>
            </div>
        </div>
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                    LEAVE MANAGEMENT
                </p>
            </header>
            <div class="card-content">
                <AdminLeaveManagement/>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./RequestManagement.ts">
</script>

<style lang="scss" scoped></style>
