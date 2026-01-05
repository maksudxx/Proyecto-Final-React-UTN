import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  title,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component
            {...props}
            title={title}
            isAuthenticated={isAuthenticated}
          />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};