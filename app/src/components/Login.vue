<template>
  <v-container fluid>
    <v-card class="mx-auto my-12" max-width="374" v-if="formShow">
      <v-img class="mx-auto" src="https://i.pinimg.com/600x315/6d/84/b4/6d84b4b525bf6bbf91cbec2abde21506.jpg" max-height="100px" max-width="100px"></v-img>
      <v-card-text>
        <v-form>
          <v-text-field v-model="changeName" :rules="userRules" label="Enter username"></v-text-field>
          <v-text-field v-model="changePass" :rules="passRules" :append-icon="getShow1?'mdi-eye':'mdi-eye-off'" :type="getShow1?'text':'password'" label="Enter Password" hint="Same as username" @click:append="changeEyecon"></v-text-field>
          <v-checkbox v-model="changeCheck" label="Remember me"></v-checkbox>
          <v-btn class="mx-auto d-inline" color="primary" elevation="2" rounded text @click="checkUser()">Login</v-btn>
          <p class="red--text d-inline mx-4">{{error}}</p>
        </v-form>
      </v-card-text>
  </v-card>
  </v-container>
</template>

<script>
import Router from '../route/index'
  export default {
    name: 'Login',
    data: () => ({
      userRules:[
        value => !!value || "Value is required",
        value => (value&&value.length>4) || "Value must be 5 or more characters in length."
      ],passRules:[
        value => !!value || "Value is required"
      ]
    }),
    methods:{
      checkUser(){
        if(this.$store.state.name=='admin'&&this.$store.state.pass=='admin'){
          this.$store.commit('LOGIN');
          Router.push({path:'/home'})
        }
        else{
          this.$store.commit('CHANGE_ERROR')
        }
      },
      changeEyecon(){
        this.$store.commit("CHANGE_EYECON");
      }
    },
    computed:{
      error(){
        return this.$store.state.errorMessage;
      },
      changeName:{
        get(){
          return this.$store.state.name;
        },
        set(value){
          this.$store.commit('CHANGE_NAME',value);
        }
      },
      changePass:{
        get(){
          return this.$store.state.pass;
        },set(value){
          this.$store.commit("CHANGE_PASS",value);
        }
      },
      changeCheck:{
        get(){
          return this.$store.state.checkbox;
        },set(value){
          this.$store.commit("CHANGE_CHECK",value);
        }
      },
      getShow1(){
        return this.$store.state.show1;
      },
      formShow(){
        return this.$store.state.formShow;
      }
    }
  }
</script>
