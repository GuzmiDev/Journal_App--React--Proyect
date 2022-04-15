import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import JournalScreen from "../componentes/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" exact component={JournalScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
