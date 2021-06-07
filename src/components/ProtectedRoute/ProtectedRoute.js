import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthorizedContext } from "../../contexts/AuthContext";

function ProtectedRoute({path, children}){

  const isAuthorized = useContext(AuthorizedContext);

  return(
    <Route to = {path} exact>
      {isAuthorized? children : <Redirect to = '/' />}
    </Route>
  )
}

export default ProtectedRoute;
