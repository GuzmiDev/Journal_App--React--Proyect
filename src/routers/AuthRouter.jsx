import { Switch, Route, Redirect } from "react-router-dom";
import LoginScreen from "../componentes/auth/LoginScreen";
import RegisterScreen from "../componentes/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" exact component={LoginScreen} />
        <Route path="/auth/register" exact component={RegisterScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default AuthRouter;
