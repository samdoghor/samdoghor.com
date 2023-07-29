import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Blog from "../pages/Blog.vue";
import Course from "../pages/Course.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/course",
    name: "Course",
    component: Course,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
