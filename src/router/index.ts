import App from "../pages/App/App";
import { PlanDetails } from "../pages/PlanDetails/PlanDetails";
import { IRoute, RouteName } from "./interfaces";

export const routes: IRoute[] = [
  {
    component: App,
    routeName: RouteName.App,
    path: "/",
    exact: true,
  },
  {
    component: PlanDetails,
    routeName: RouteName.PlanDetails,
    path: "/plandetails/:id",
    exact: true
  },
];