<template>
      <v-main>
        <v-container v-if="!formShow">
          <v-row>
            <v-col v-for="book in bookDetails" :key="book.id" cols="12" md="4" sm="6" lg="4" xs="12" xl="2">
                <v-card color="grey lighten-4">
                  <v-img :src="book.src" width="100%" height="300" contain></v-img>
                  <v-card-title class="justify-center">
                    <div class="headerClass">
                      {{book.name}}
                    </div>
                    </v-card-title>
                    <v-card-text class="font-weight-black justify-center">{{book.author}}</v-card-text>
                  <v-divider></v-divider>
                  <v-card-text class="headerClass">{{book.description}}</v-card-text>
                </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
</template>

<script>
export default {
  computed:{
    bookDetails(){
        return this.$store.state.bookDetails;
  },
    formShow(){
      return this.$store.state.formShow;
    }
  },
   created(){
     this.$http.get("../books.json").then(function(res){
       this.$store.commit('CHANGE_BOOKDETAILS',res.data);
     })
   }
}
</script>
<style scoped>
.headerClass{
    white-space: nowrap ;
    word-break: normal;
    overflow: hidden ;
    text-overflow: ellipsis;
}
</style>