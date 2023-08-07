import { RouteConfig } from "vue-router";

const sample: Array<RouteConfig> = [
  {
    path: "/sample",
    name: "Sample",
    component: () => import("@/domains/sample/pages/Sample.vue"),
    children: [
    ],
  },
];

export default sample;
