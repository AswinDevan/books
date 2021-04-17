<template>
  <v-container fluid>
    <v-card class="mx-auto my-12" max-width="374" v-if="$store.state.formShow">
      <v-img class="mx-auto" src="https://i.pinimg.com/600x315/6d/84/b4/6d84b4b525bf6bbf91cbec2abde21506.jpg" max-height="100px" max-width="100px"></v-img>
      <v-card-text>
        <v-form>
          <v-text-field v-model="$store.state.name" :rules="userRules" label="Enter username"></v-text-field>
          <v-text-field v-model="$store.state.pass" :rules="passRules" :append-icon="$store.state.show1?'mdi-eye':'mdi-eye-off'" :type="$store.state.show1?'text':'password'" label="Enter Password" hint="Same as username" @click:append="$store.state.show1=!$store.state.show1"></v-text-field>
          <v-checkbox v-model="$store.state.checkbox" :rules="checkRules" label="Remember me"></v-checkbox>
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
      ],checkRules:[
        check=>!!check||"Must be selected"
        ]
    }),
    methods:{
      checkUser(){
        if(this.$store.state.checkbox==false){
            this.$store.commit('CHANGE_ERROR');
        }else if(this.$store.state.name=='admin'&&this.$store.state.pass=='admin'){
          this.$store.commit('LOGIN');
          Router.push("Home")
        }
        else{
          this.$store.commit('CHANGE_ERROR2')
        }
      },
    },computed:{
        error(){
        return this.$store.state.errorMessage;
      }
    }
  }
</script>
