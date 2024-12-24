import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/worklist/StyleGuide",
    name: "StyleGuide",
    component: () => import("@/views/worklist/StyleGuide.vue"),
  },
  {
    path: "/worklist/PublishList",
    name: "PublishList",
    component: () => import("@/views/worklist/PublishList.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "ConnectionError",
    component: () => import("@/views/worklist/ConnectionError.vue"),
  },
  {
    path: "/home",
    name: "MainHome",
    component: () => import("@/views/main/MainHome.vue"),
  },
  {
    path: "/MainBottomSheet",
    name: "MainBottomSheet",
    component: () => import("@/views/main/MainBottomSheet.vue"),
  },
  {
    path: "/store",
    name: "StoreMain",
    component: () => import("@/views/store/StoreMain.vue"),
  },
  {
    path: "/store/StoreNearby",
    name: "StoreNearby",
    component: () => import("@/views/store/StoreNearby.vue"),
  },
  {
    path: "/store/StoreSearchEmpty",
    name: "StoreSearchEmpty",
    component: () => import("@/views/store/StoreSearchEmpty.vue"),
  },
  {
    path: "/store/StoreBtDisabled",
    name: "StoreBtDisabled",
    component: () => import("@/views/store/StoreBtDisabled.vue"),
  },
  {
    path: "/store/StoreNearbyEmpty",
    name: "StoreNearbyEmpty",
    component: () => import("@/views/store/StoreNearbyEmpty.vue"),
  },
  {
    path: "/store/StoreNearbyEmpty",
    name: "StoreNearbyEmpty",
    component: () => import("@/views/store/StoreNearbyEmpty.vue"),
  },
  {
    path: "/SubHeaderSmall",
    name: "SubHeaderSmall",
    component: () => import("@/views/store/SubHeaderSmall.vue"),
  },
  {
    path: "/SubHeaderOnly",
    name: "SubHeaderOnly",
    component: () => import("@/views/store/SubHeaderOnly.vue"),
  },
  { path: "/", redirect: "/home" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
