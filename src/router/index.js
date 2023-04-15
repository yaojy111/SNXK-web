import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/mainpage/WelcomePage'
import SearchingRes from '../views/mainpage/SearchingRes'
import NewData from '../views/mainpage/NewData'
import Visualize from '../views/mainpage/Visualize'
import Aboutus from '../views/mainpage/Aboutus'
const routes = [
  {
    path: "/",
    name: "home",
    component: WelcomePage,
  },
  {
    path: "/search",
    component: SearchingRes,
  },
  {
    path: "/data",
    component: NewData,
  },
  {
    path: "/visual",
    component: Visualize,
  },
  {
    path: "/aboutus",
    component: Aboutus,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
