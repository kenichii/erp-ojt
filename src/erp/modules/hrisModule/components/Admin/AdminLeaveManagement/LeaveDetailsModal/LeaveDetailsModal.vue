<template>

    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48 is-2">
                        <img src="../../../../../../../assets/gulapanatics.jpg"
                             class="is-rounded">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="subtitle is-4  is-marginless">Kenneth G. Reyes</p>
                    <p class="is-6 has-text-primary">Jr. Front-end Developer</p>
                </div>
            </div>
            <div class="media"></div>
            <div class="has-text-centered">
                <h1 class="title is-6">APPLIED FOR VACATION</h1>
            </div>

            <!--LEAVE DETAILS-->
            <div class="field is-horizontal">
                <div class="field-label is-3">
                    <label class="label">Date:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <span>{{selected.leavestartdate}} - {{selected.leaveenddate}}</span>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-3">
                    <label class="label">Duration:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <span>{{selected.duration}}</span>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-3">
                    <label class="label">Status:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <span>{{selected.status}}</span>
                    </div>
                </div>
            </div>
            <div class="field is-horizontal">
                <div class="field-label is-3">
                    <label class="label">Reason:</label>
                </div>
                <div class="field-body">
                    <div class="field">
                        <span>{{selected.reason}}</span>
                    </div>
                </div>
            </div>
            <div class="media"></div>

            <LeavesCount/>
        </div>
    </div>

</template>

<script lang="ts" src="./LeaveDetailsModal.ts"></script>

