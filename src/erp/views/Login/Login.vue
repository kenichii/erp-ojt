<template>
    <div id="app" class="hero">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

            <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>

        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-4 is-offset-4">
                        <figure class="mb-45">
                            <img src="@/assets/icons/ERP_LOGO.png" class="logo is-center"/>
                        </figure>
                        <h3 class="subtitle has-text-black">Sign in to your account</h3>




                            <b-field label="Username" class="level-left" >
                            </b-field>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" name="username" v-model="username" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('username') }" type="text" placeholder="Username">
                                    <!--<i v-show="errors.has('username')" class="fa fa-warning"></i>-->
                                    <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
                                </div>
                            </div>

                            <b-field label="Password" class="level-left" >
                            </b-field>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-medium" name="password" v-model="password" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" placeholder="Password">
                                    <!--<i v-show="errors.has('username')" class="fa fa-warning"></i>-->
                                    <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                                </div>
                            </div>
                            <!--<router-link to="/selectmodule"-->
                            <!--class="button is-primary is-medium is-fullwidth mt-40">Login-->
                            <!--</router-link>-->

                        <label v-show="invalidCredential" class="has-text-danger">Invalid username or password</label>


                        <button v-on:click="login()" class="button is-primary is-medium is-fullwidth mt-40">Login</button>


                        <router-link to="/ForgotPassword" class="pull-left link mt-10">Forgot Password</router-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script lang='ts' src='./Login.ts'/>
<style lang="scss" src="./Login.scss" scoped></style>