import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";
import Events from "@/views/Events.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/courses", component: Courses },
  {path:"/events", component:Events},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
