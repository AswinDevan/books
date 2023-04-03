<template>
  <v-main v-if="!formShow">
    <p>Author of the Book</p>
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
