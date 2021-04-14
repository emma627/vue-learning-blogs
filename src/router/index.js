import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Details from "../views/Details.vue";
import Tag from "../views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Create",
    name: "Create",
    component: Create,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props:true,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
    props:true,
  },

  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
