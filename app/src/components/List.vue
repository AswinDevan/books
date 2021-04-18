<template>
        <v-main v-if="!formShow">
            <p>My List</p>
                      {{haha}}
        </v-main>
</template>
<script>
export default {
    computed:{
     haha(){
     return  this.$store.state.loginState;
     },
    formShow(){
      return this.$store.state.formShow;
    }
   }
}
</script>