<template>
  <v-main v-if="!formShow">
    <p>Author of the Book is Me</p>
  </v-main>
</template>

<script>
export default {
  computed: {
    formShow() {
      return this.$store.state.formShow;
    },
  },
};
</script>
