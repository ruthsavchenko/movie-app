import '../src/style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Schedule from './components/Schedule';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Router>
          <div>
            <Header />
          </div>
          <Switch>
            <Route exact path="/movies" component={Movies}></Route>
            {/* <Route exact path="/users" component={Movies}></Route> */}
            <Route path="/movies/:id" component={MovieDetails}></Route>
            <Route path="/schedule" component={Schedule}></Route>
            {/* <Route exact path="/schedule:id" component={Schedule}></Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
