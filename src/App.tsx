import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import useAuthContext from "./hooks/useAuthContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const { user, authIsReady } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <>
          {user && <Header />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin">
              {user ? <Admin /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              {user ? <Redirect to="/admin" /> : <Login />}
            </Route>
          </Switch>
          {user && <Footer />}
        </>
      )}
    </>
  );
};

export default App;
