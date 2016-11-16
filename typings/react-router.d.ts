import { InjectedRouter } from 'react-router';

declare module 'react-router' {
  interface InjectedRouterProps {
    router?: InjectedRouter;
  }
}