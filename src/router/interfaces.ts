export enum RouteName {
  About = 'about',
  App = 'app',
  PlanDetails = 'plandetails'
}

export interface IRoute {
  path: string;
  routeName: RouteName;
  component: (props?: any) => JSX.Element;
  exact: boolean
}

export interface IAllRoutes {
  ABOUT: IRoute;
  APP: IRoute;
  PLANDETAILS: IRoute
}
