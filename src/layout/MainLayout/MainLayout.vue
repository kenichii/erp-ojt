<template>
    <section class="wrapper">
        <NavBar :userRole="userRole" @changeRole="changeRole" @toggleNav="toogleSideNav"/>
        <div class="columns is-marginless">
            <SideNav :menuItem="menuItem" :toggleNav="toggleNav"/>
            <main class="column main">
                <router-view></router-view>
            </main>
        </div>
    </section>
</template>

<script lang="ts" src="./MainLayout.ts"></script>
<style lang="scss" src="./MainLayout.scss"></style>
