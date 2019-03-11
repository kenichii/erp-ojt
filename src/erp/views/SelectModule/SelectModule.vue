<template>
    <div>
        <nav class="navbar">
            <div class="navbar-brand">
                <router-link to="/selectmodule" class="navbar-item">
                    <img src="@/assets/icons/ERP_LOGO_small.png">
                </router-link>
            </div>
            <div id="navMenu" class="navbar-menu">
                <div class="navbar-end">
                    <router-link to="/" class="navbar-item has-text-white">
                        Log-out
                    </router-link>
                </div>
            </div>

        </nav>

        <section class="hero is-fullheight-with-navbar">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column" v-for="module in erpModules">
                            <router-link :to="'/' + module.text" class="button is-fullwidth">
                                <figure class="image is-64x64">
                                    <img v-bind:src="module.icon"/>
                                </figure>
                                <p>{{module.text}}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang="ts" src="./SelectModule.ts"></script>

<style lang="scss" src="./SelectModule.scss" scoped></style>
