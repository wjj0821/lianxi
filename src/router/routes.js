import Home from "view/home";
import trip from "view/trip";
import Vuexx from "view/vuex";
import User  from "view/user";
import Login from "view/login";
const routes = [
  {
    path: "/",
    component: Home,
    redirect:"/login"
  },
  {
    path: "/trip",
    component: trip
  },{
    path:"/vuexx",
    name:"Vuexx",
    component:Vuexx
  },{
    path:"/user",
    name:"user",
    component:User
  },{
    path:"/login",
    name:"login",
    component:Login
  }
];

export default routes;
