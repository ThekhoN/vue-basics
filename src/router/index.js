import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PropsParentToChild from "@/components/PropsParentToChild";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: PropsParentToChild
    }
  ]
});
