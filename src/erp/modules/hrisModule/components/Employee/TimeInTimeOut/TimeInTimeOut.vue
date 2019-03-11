<template>
    <section id="time-in-time-out">

        <button v-if="!isTimeIn" class="button is-primary is-fullwidth" @click="toggleTimeIn()">Time In</button>
        <button v-else class="button is-fullwidth" @click="toggleTimeIn()">Time Out</button>
        <p class="mt-10 has-text-centered" v-if="isTimeIn">
            {{timeIn}}
        </p>
        <p class="current-time has-text-centered">{{currentTime}}</p>
    </section>
</template>

<script lang="ts" src="./TimeInTimeOut.ts"></script>

<style lang="scss" src="./TimeInTimeOut.scss" scoped></style>


