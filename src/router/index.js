import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/mainpage/WelcomePage'
import SearchingRes from '../views/mainpage/SearchingRes'
import NewData from '../views/mainpage/NewData'
import Visualize from '../views/mainpage/Visualize'
import Aboutus from '../views/mainpage/Aboutus'
import Develop from '../views/mainpage/Develop'
import ImportVisualize from '../views/mainpage/ImportVisualize'
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
  },{
    path: "/develop",
    component: Develop,
  },
  {
    path: "/import/visualize",
    component: ImportVisualize,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
