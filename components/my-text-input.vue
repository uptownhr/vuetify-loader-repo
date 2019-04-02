<template>
  <v-text-field
    v-bind="$attrs"
    v-on="$listeners"
    class="my"
  />
</template>

<style>
  .my .v-input__slot {
    border: 1px;
  }
</style>

<style scoped>
  .my >>> .v-input__control > .v-input__slot {
    border: 1px;
  }
</style>