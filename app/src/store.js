import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins:[createPersistedState({
    storage:window.sessionStorage,
 })],
    state: {
      drawer:null,
      searchValue:'',
      selectedItem:0,
      loginState:false,
      name:'',
      pass:'',
      checkbox:false,
      show1:false,
      formShow:true,
      errorMessage:'',
      items: [
        { text: 'Home', icon: 'mdi-home',link:'/home' },
        { text: 'Explore', icon: 'mdi-compass',link:'/explore' },
        { text: 'My List', icon: 'mdi-list-status',link:'/list' },
        { text: 'Author', icon: 'mdi-account-star',link:'/author'},
      ],
      chipData:[
        'All','Fantasy','Action','Thriller','Adventure','Mystery','Classic','Comedy','Drama','Romance'
      ],
      bookDetails:[],
    },
    mutations:{
      LOGIN:state=>state.formShow=false,
      LOGOUT:(state)=>{
        state.formShow=true;
        state.errorMessage=null;
        state.name='',
        state.pass='',
        state.checkbox=false,
        state.selectedItem=0;
        state.drawer=null;
      },
      CHANGE_ERROR:(state)=>{
        state.errorMessage="CheckBox must be clicked"
      },
      CHANGE_ERROR2:(state)=>{
        state.errorMessage="Invalid User"
      },
      CHANGE_DRAWER:(state)=>{
        state.drawer=!state.drawer
      },
      CHANGE_NAME:(state,value)=>{
        state.name=value;
      },
      CHANGE_PASS:(state,value)=>{
        state.pass=value;
      },
      CHANGE_CHECK:(state,value)=>{
        state.checkbox=value;
      },
      CHANGE_EYECON:(state)=>{
        state.show1=!state.show1;
      },
      CHANGE_SEARCHVAL:(state,value)=>{
        state.searchValue=value;
      },
      CHANGE_SELECTEDITEM:(state,value)=>{
        state.selectedItem=value;
      }
    }
  })