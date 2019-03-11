<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="column is-4 is-offset-4 has-text-centered">
                    <div>
                        <figure class="mb-45">
                            <img src="@/assets/icons/ERP_LOGO.png" class="logo is-center"/>
                        </figure>
                        <h3 class="title has-text-grey-dark title">Hi Wakin Montes</h3>
                        <p class=" has-text-grey-dark ">We got a request to reset your account's Password.
                            Confirmation Code: XXXXXXXX
                            This message will only be available within 24 hours.</p>
                        <a class="button is-primary is-medium m-10" @click="isCardModalActive = true">Confirm
                            Reset</a>
                    </div>
                    <p>
                        If you ignore this message, your password won't be changed.
                    </p>
                </div>
            </div>
            <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                <ConfirmReset/>
            </b-modal>
        </div>
    </section>
</template>

<script lang="ts" src="./ResetPassword.ts">
</script>

<style lang="scss" src="../../Login/Login.scss" scoped>

</style>
