<template>
        <v-main v-if="!formShow">
         <p>Explore</p>
         <v-btn @click="change()">Click</v-btn>
        </v-main>
</template>
<script>
export default {
    methods:{
        change(){
            this.$store.state.loginState=!this.$store.state.loginState;
        }
    },computed:{
    formShow(){
      return this.$store.state.formShow;
    }
    }
}
</script>