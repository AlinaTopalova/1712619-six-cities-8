import { Route, RouteProps, Redirect } from 'react-router-dom';
import { AppRoute } from 'const';

const isAuthorized = true;

type PrivateRouteProps = RouteProps & {
  authorizationStatus?: typeof isAuthorized,
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, authorizationStatus = isAuthorized, children} = props;
  return (
    <Route exact={exact} path={path}>
      {authorizationStatus? children : <Redirect to={AppRoute.SignIn}/>}
    </Route>

  );
}

