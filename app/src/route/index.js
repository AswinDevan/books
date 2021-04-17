import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Explore from '../components/Explore.vue'
import List from '../components/List.vue'
import Author from '../components/Author.vue'
import Store from '../store'

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {path:"/login",name:"Login",component:Login},
        {path:"/home",name:"Home",component:Home},
        {path:"/explore",name:"Explore",component:Explore},
        {path:"/list",name:"My List",component:List},
        {path:"/author",name:"Author",component:Author},
        {path:"/",redirect:()=>{
            if(Store.state.formShow==true){
                return '/login'
            }else{
                return '/home'
            }
        }}
    ],
    scrollBehavior(){
        return {x:0,y:0}
    }
})

