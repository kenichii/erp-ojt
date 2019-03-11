<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="column is-4 is-offset-4">
                    <div class="has-text-centered">
                        <figure class="mb-45">
                            <img src="@/assets/icons/ERP_LOGO.png" class="logo is-center"/>
                        </figure>
                        <h1 class="title">Forgot Password</h1>
                        <p class="has-text-grey-dark">Enter the email address you use to sign in and we will send a link
                            to
                            reset your password</p>
                    </div>
                    <form class="mt-20">
                        <b-field label="Email">
                            <input type="email" autocomplete="on" class="input is-medium">
                        </b-field>

                        <div class="field is-grouped is-pulled-right">
                            <div class="control">
                                <router-link to="/ForgotPassword/ResetPassword"
                                             class="button is-primary">Reset Password
                                </router-link>
                            </div>
                            <div class="control">
                                <router-link to="/" class="button">Cancel</router-link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>
<script lang="ts" src="./ForgotPassword.ts"></script>

<style lang="scss" src="../Login/Login.scss" scoped>

</style>
