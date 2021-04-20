<template>
  <v-app id="app">
    <v-container v-if="!formShow">
     <v-navigation-drawer v-model="drawerModel" app color="teal">
       <v-toolbar-title>
         <v-app-bar-nav-icon @click="changeDraw"></v-app-bar-nav-icon>NovelFull
       </v-toolbar-title>
     <v-list dense>
       <v-subheader>Novel Services</v-subheader>
       <v-list-item-group v-model="selectedItem" color="white">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="changeDraw()" v-if="!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="!drawer">NovelFull</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="searchVal" clearable hide-details append-icon="mdi-magnify"></v-text-field>
      <v-spacer></v-spacer>
      <v-icon class="pr-5">mdi-plus</v-icon>
      
       <v-menu bottom min-width="200px" rounded offset-y>
         <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="teal" size="38">
              <span class="white--text">{{ name.substring(0,1).toUpperCase() }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <h3>{{ name }}</h3>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="logout()">
                Logout
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
        </v-menu>

      <template v-slot:extension v-if="selectItem==0">
        <v-tabs  next-icon="mdi-arrow-right-drop-circle" prev-icon="mdi-arrow-left-drop-circle" show-arrows>
          <v-tab class="ma-2" v-for="chip in chipData" :key="chip">
            <v-chip>{{chip}}</v-chip>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    </v-container>
    <router-view />
  </v-app>
</template>

<script>
import Router from './route/index'
export default {
  name: "App",
  data:()=>({
           items: [
        { text: 'Home', icon: 'mdi-home',link:'/home' },
        { text: 'Explore', icon: 'mdi-compass',link:'/explore' },
        { text: 'My List', icon: 'mdi-list-status',link:'/list' },
        { text: 'Author', icon: 'mdi-account-star',link:'/author'},
      ],
            chipData:[
        'All','Fantasy','Action','Thriller','Adventure','Mystery','Classic','Comedy','Drama','Romance','Fiction'
      ]
  }),
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      Router.push({path:'/login'});
    },changeDraw(){
      this.$store.commit("CHANGE_DRAWER")
    }
  },
  computed:{
    drawer(){
      return this.$store.state.drawer;
    },
    formShow(){
      return this.$store.state.formShow;
    },
    searchVal:{
      get(){
        return this.$store.state.searchValue;
      },set(value){
         this.$store.commit("CHANGE_SEARCHVAL",value);
      }
    },
    name(){
      return this.$store.state.name;
    },
    selectedItem:{
      get(){
        return this.$store.state.selectedItem;
      },set(value){
        this.$store.commit("CHANGE_SELECTEDITEM",value);
      }
    },
    selectItem(){
      return this.$store.state.selectedItem;
    },
    drawerModel:{
        get(){
          return this.$store.state.drawer;
        },set(value){
          this.$store.commit("CHANGE_DRAWERMODEL",value);
        }
    }
  }
};
</script>
<style scoped>
#app {
  background-color: antiquewhite;
}
</style>
