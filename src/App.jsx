import "./assets/css/App.css"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Login from "./pages/Login"
import useAuthContext from "./hooks/useAuthContext"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  const { user, authIsReady } = useAuthContext()

  return (
    <>
      {authIsReady && (
        <>
          {user && <Header />}
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/admin">
                {user ? <Admin /> : <Redirect to="/login" />}
              </Route>
              <Route exact path="/login">
                {user ? <Redirect to="/admin" /> : <Login />}
              </Route>
            </Switch>
          </div>
          {user && <Footer />}
        </>
      )}
    </>
  )
}

export default App
