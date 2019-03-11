<template>
    <div class="card">
        <header class="card-header">
            <div class="card-header-title">
                <div class="is-pulled-left">Employee Management</div>
                <div class="ml-auto">
                    <router-link :to="{name:'AddEmployee'}" class="button is-primary">Add Employee</router-link>
                </div>
            </div>
        </header>
        <div class="card-content">
            <EmployeeTableList :employeeList="employeeList"/>
        </div>
    </div>
</template>

<script lang="ts" src="./EmployeeManagementComponent.ts"></script>

