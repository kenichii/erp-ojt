<template>
    <aside class="aside" id="navbarBasicExample" :class="{'is-active':toggleNav}">

        <div class="user-profile">
            <figure class="image is-64x64 mb-10">
                <img src="../../assets/gulapanatics.jpg"
                     class="is-rounded">
            </figure>
            <p class="title is-5">Gulapanatics Montes</p>
            <p class="subtitle is-6">MVP Asia Pacific Inc.</p>
        </div>
        <TimeInTimeOut/>
        <nav class="menu">
            <ul class="menu-list">
                <li v-for="item in menuItem">
                    <router-link :to="{path: item.path}">
                        <span>{{item.name}}</span>
                    </router-link>
                </li>

            </ul>
        </nav>
    </aside>
</template>
<script lang="ts" src="./SideNav.ts"></script>
<style lang="scss" src="./SideNav.scss"></style>
