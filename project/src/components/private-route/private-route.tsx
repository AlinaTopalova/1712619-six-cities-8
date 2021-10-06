import { Route, RouteProps, Redirect } from 'react-router-dom';
import { AppRoute } from 'const';

const isAuthorized = false;

type PrivateRouteProps = RouteProps;

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, children} = props;
  if (!isAuthorized) {
    return <Redirect to={AppRoute.SignIn}/>;
  }
  return <Route exact={exact} path={path}>{children}</Route>;
}

