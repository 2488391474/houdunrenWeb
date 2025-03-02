import { env } from "@/utils/index";
import { RouteRecordRaw } from "vue-router";

const layouts = import.meta.glob("../layouts/*.vue");
//                                                  **指可以遍历子目录
const views = import.meta.glob("../views/**/*.vue");

function getRoutes() {
  const layoutRoutes = [] as RouteRecordRaw[];
  Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module);

    route.children = getChildrenRoutes(route);
    layoutRoutes.push(route);
  });

  return layoutRoutes;
}

function getChildrenRoutes(layoutRoute: RouteRecordRaw): RouteRecordRaw[] {
  const routes = [] as RouteRecordRaw[];

  Object.entries(views).forEach(([file, module]) => {
    if (file.includes(`../views/${layoutRoute.name as string}`)) {
      const route = getRouteByModule(file, module);
      routes.push(route);
    }
  });
  return routes;
}

function getRouteByModule(file: string, module: { [key: string]: any }) {
  const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");

  const route = {
    name: name.replace("/", "."),
    path: `/${name}`,
    component: module,
  } as RouteRecordRaw;

  return Object.assign(route, module?.route);
}

const routes = env.VITE_ROUTE_AUTOLOAD ? getRoutes() : [] as RouteRecordRaw[];

export default routes;
