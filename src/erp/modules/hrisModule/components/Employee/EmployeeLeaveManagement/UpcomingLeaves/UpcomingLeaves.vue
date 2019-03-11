<template>
    <div class="card" >
        <header class="card-header">
            <p class="card-header-title">
                Upcoming Leaves
            </p>
        </header>
        <div class="card-content">
            <div v-for="Leaves in upcomingLeaves" :key="Leaves.id" >
                <dl class="columns">
                    <div class="column title is-6">
                        <dt>{{Leaves.days}}</dt>
                        <dd class="subtitle is-size-7">{{Leaves.date}}</dd>
                    </div>

                    <dt class="column title is-6">
                        <p>{{Leaves.status}}</p>
                    </dt>
                </dl>
            </div>
        </div>
    </div>
</template>

<script lang="ts" src="./UpcomingLeaves.ts">
</script>

<style lang="scss" src="./UpcomingLeaves.scss" scoped>

</style>
