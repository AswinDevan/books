<template>
  <v-app id="app">
    <v-container v-if="!formShow">
     <v-navigation-drawer v-model="$store.state.drawer" app color="teal">
       <v-toolbar-title>
         <v-app-bar-nav-icon @click="changeDraw()"></v-app-bar-nav-icon>NovelFull
       </v-toolbar-title>
     <v-list dense>
       <v-subheader>Novel Services</v-subheader>
       <v-list-item-group v-model="$store.state.selectedItem" color="white">
        <v-list-item v-for="(item, i) in $store.state.items" :key="i" @click="route(i)">
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
      <v-text-field v-model="$store.state.bookName" clearable hide-details append-icon="mdi-magnify"></v-text-field>
      <v-spacer></v-spacer>
      <v-icon class="pr-5">mdi-plus</v-icon>
      <v-avatar color="teal" size="40" @click="logout()">{{$store.state.name.substring(0,1).toUpperCase()}}</v-avatar>
      <template v-slot:extension>
        <v-spacer></v-spacer>
       <v-chip class="ma-2" v-for="chip in chips" :key="chip.id">{{chip}}</v-chip>
       <v-spacer></v-spacer>
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
  methods: {
    route(i) {
      Router.push({ name: this.$store.state.items[i].text });
    },
    logout() {
      this.$store.commit("LOGOUT");
      Router.push("Login");
    },changeDraw(){
      this.$store.commit("CHANGE_DRAWER")
    }
  },
  computed:{
    drawer(){
      return this.$store.state.drawer;
    },formShow(){
      return this.$store.state.formShow;
    },chips(){
      return this.$store.state.chipData;
    }
  }
};
</script>
<style scoped>
#app {
  background-color: antiquewhite;
}
</style>
