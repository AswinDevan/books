<template>
    <v-main v-if="!formShow">
        <p>Authors</p>
    </v-main>
</template>

<script>
export default {
    computed:{
    formShow(){
      return this.$store.state.formShow;
    }
    }
}
</script>