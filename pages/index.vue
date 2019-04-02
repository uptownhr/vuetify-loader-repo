<template>
  <div>
    <h1>hi testing</h1>

    <v-text-field
      label="Full Name"
      outline
      hide-details
      class='rounded'
    />

    <my-text-input
      label="Full Name"
      outline
      hide-details
      class='rounded'
    />
  </div>
</template>

<script>
  import myTextInput from '~/components/my-text-input'

  export default {
    components: {myTextInput}
  }
</script>