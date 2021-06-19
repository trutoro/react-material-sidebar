import { lazy } from "react";

function importView(...args) {
  const path = args
    .map((arg) => {
      if (Array.isArray(arg)) {
        const nestPath = new Array(arg[1])
          .fill(0)
          .map(() => arg[0])
          .join("/");
        arg = nestPath;
      }
      return arg;
    })
    .join("/");
  return import(`../views/${path}.js`);
}

export const mainRoutes = [
  {
    path: `/dashboard`,
    component: lazy(() => importView(["Dashboard", 2])),
  },
  {
    path: `/posts`,
    component: lazy(() => importView("Posts", "routes")),
    routes: [
      {
        path: `/posts/all`,
        component: lazy(() => importView("Posts", "Posts")),
      },
      {
        path: `/posts/editor`,
        component: lazy(() => importView("Posts", "Editor")),
      },
    ],
  },
  {
    path: `/users`,
    component: lazy(() => importView(["Users", 2])),
  },
];
