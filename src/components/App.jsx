
import NavBar from './../components/NavBar';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';
import BlogDetails from './Pages/Details/BlogDetails';
import NotFound from "../components/Pages/NotFound/NotFound";


function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
