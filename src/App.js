import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import "font-awesome/css/font-awesome.min.css";

const Home = React.lazy(() => import("./containers/Home/index"));

function App() {
  const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        <div className="container-fluid" style={{ minWidth: 320 }}>
          <Component {...props} />
        </div>
      )}
    />
  );

  return (
    <div className="App">
      <Router>
        <Switch>
          <React.Suspense fallback={<Loading />}>
            <RestrictedRoute path="/" exact={true} component={Home} />
          </React.Suspense>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
