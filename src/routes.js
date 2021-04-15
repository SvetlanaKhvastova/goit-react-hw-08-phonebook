import { lazy } from "react";
import links from "./nav.json";

const routes = links.map((link) => {
  const { id, component, exact, path } = link;
  return {
    exact: exact,
    path: path,
    component: lazy(() => import(`${component}`)),
    key: id,
  };
});

export default routes;
