import { Route, RouteProps, Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { History } from 'history';
import { Store } from 'types/store';
import { AppRoute, AuthStatus } from 'const';

type RenderFuncProps = {
  history: History<unknown>;
}

type PrivateRouteProps = RouteProps & {
  render: (props: RenderFuncProps) => JSX.Element;
  authStatus: AuthStatus;
};

const mapStateToProps = ({ authStatus }: Store) => ({
  authStatus,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentProps): JSX.Element {
  const { exact, path, render, authStatus} = props;

  if (authStatus !== AuthStatus.Auth) {
    return <Redirect to={AppRoute.SignIn}/>;
  }

  return  (
    <Route
      exact={exact}
      path={path}
      render={render}
    />
  );
}

export { PrivateRoute };

export default connector(PrivateRoute);


