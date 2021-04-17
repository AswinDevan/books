<template>
        <v-main>
            <p>My List</p>
                      {{haha}}
        </v-main>
</template>
<script>
export default {
    computed:{
     haha(){
     return  this.$store.state.loginState;
     }
   }
}
</script>