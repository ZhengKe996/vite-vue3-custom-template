import { createRouter, createMemoryHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: () => import(""),
  },
];

const router = createRouter({
  routes,
  history: createMemoryHistory(),
});

export default router;
