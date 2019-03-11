<template>
    <div class="card" >
        <header class="card-header">
            <p class="card-header-title">
                Upcoming Holidays
            </p>
        </header>
        <div class="card-content">
            <div v-for="Holidays in upcomingHolidays" :key="Holidays.id" >
                <dl class="columns">
                    <div class="column title is-6">
                        <dt>{{Holidays.event}}</dt>
                        <dd class="subtitle is-size-7">{{Holidays.date}}</dd>
                    </div>

                    <dt class="column title is-6">
                        <p>{{Holidays.day}}</p>
                    </dt>
                </dl>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UpcomingHolidays.ts">
</script>

<style lang="scss" src="./UpcomingHolidays.scss" scoped>

</style>
