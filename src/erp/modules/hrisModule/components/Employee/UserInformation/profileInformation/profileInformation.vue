<template>
  <div class="card">
    <header class="card-header">
      <div class="card-header-title column">
        <div class="is-pulled-left">Profile Information</div>
        <a v-on:click="editView = !editView" class="is-pulled-right has-text-primary"><span class="icon">
                  <i class="fas fa-edit"></i>
                </span> Edit Profile</a>
      </div>
    </header>
    <div class="card-content">
      <div class="content">

        <div class="field is-horizontal">
          <div class="field-label is-3">
            <label class="label">First Name:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <span v-if="!editView">{{profileInformation.firstName}}</span>
              <input v-else type="text" class="input" v-model="profileInformation.firstName">
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-3">
            <label class="label">Middle Name:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <span v-if="!editView">{{profileInformation.middleName}}</span>
              <input v-else type="text" class="input" v-model="profileInformation.middleName">
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-3">
            <label class="label">Last Name:</label>
          </div>
          <div class="field-body">
            <div class="field">
              <span v-if="!editView">{{profileInformation.lastName}}</span>
              <input v-else type="text" class="input" v-model="profileInformation.lastName">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang='ts' src='./profileInformation.ts'/>
