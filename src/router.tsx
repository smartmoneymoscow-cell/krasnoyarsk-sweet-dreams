import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

const basepath =
  typeof window !== "undefined" && window.location.pathname.startsWith("/krasnoyarsk-sweet-dreams")
    ? "/krasnoyarsk-sweet-dreams"
    : "/";

export const getRouter = () => {
  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    defaultPreloadStaleTime: 0,
  });

  return router;
};
