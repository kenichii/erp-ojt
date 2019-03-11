<template>
    <header class="hero">
        <div class="hero-head">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <router-link to="/selectmodule" class="navbar-item">
                        <img src="@/assets/icons/ERP_LOGO_small.png">
                    </router-link>

                    <b-dropdown position="is-bottom-left" class="is-hidden-desktop">
                        <a class="navbar-item has-text-white" slot="trigger">
                            <span>Profile</span>
                            <b-icon icon="menu-down"></b-icon>
                        </a>

                        <b-dropdown-item>Profile</b-dropdown-item>
                        <b-dropdown-item has-link>
                            <a v-on:click="logout">
                                Log-out
                            </a>
                        </b-dropdown-item>
                    </b-dropdown>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                       @click="showSideNav()" :class="{ 'is-active': toggleNav }"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div class="navbar-menu">
                    <div class="navbar-end">
                        <b-field class="navbar-item is-hidden-touch is-hidden-desktop-only is-marginless">
                            <b-select placeholder="Select a name" v-model="role" v-on:input="updateValue(role)">
                                <option
                                        v-for="(userRole, index) in userRoles"
                                        :value="userRole"
                                        :key="index">
                                    {{ userRole }}
                                </option>
                            </b-select>
                        </b-field>


                        <b-dropdown position="is-bottom-left">
                            <a class="navbar-item has-text-white" slot="trigger">
                                <span>Profile</span>
                                <b-icon icon="menu-down"></b-icon>
                            </a>

                            <b-dropdown-item>Profile</b-dropdown-item>
                            <b-dropdown-item has-link>
                                <a v-on:click="logout">
                                    Log-out
                                </a>
                            </b-dropdown-item>
                        </b-dropdown>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script lang="ts" src="./NavBar.ts"></script>
<style lang="scss" src="./NavBar.scss" scoped></style>
