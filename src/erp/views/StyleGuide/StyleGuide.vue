<template>
    <section class="hero is-fullheight">
        <div class="hero-head">
            <h1 class="title">StyleGuide</h1>
        </div>
        <div class="hero-body">
            <div class="container">
                <section class="section">
                    <h2 class="subtitle">Buttons</h2>
                    <div class="buttons">
                        <button class="button is-primary">Primary</button>
                        <button class="button">Default</button>
                        <button class="button is-danger">Danger</button>
                    </div>
                </section>

                <section class="section">
                    <h2 class="subtitle">Card</h2>
                    <div class="card">
                        <header class="card-header">
                            <p class="card-header-title">
                                Component
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                            </div>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <h2 class="subtitle">Forms</h2>
                    <b-field label="Input">
                        <b-input></b-input>
                    </b-field>

                    <b-field label="Message">
                        <b-input type="textarea"></b-input>
                    </b-field>
                </section>
            </div>
        </div>
    </section>
</template>

<style lang="scss" src="./StyleGuide.scss"></style>
