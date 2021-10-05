import { Route, RouteProps, Redirect } from 'react-router-dom';
import { AppRoute } from '../../const';

type AuthorizationStatus = boolean;

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus,
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { exact, path, authorizationStatus, children} = props;
  return (
    <Route exact={exact} path={path}>
      {authorizationStatus? children : <Redirect to={AppRoute.SignIn}/>}
    </Route>

  );
}

