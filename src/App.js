import { Switch, Route } from 'react-router-dom';
// import Header from './components/Header';
import Home from './pages/Home';
// import Footer from './components/Footer';
import './assets/css/App.css';

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
