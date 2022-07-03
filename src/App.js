import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import ErrorFile from './ErrorFile';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Route path="/Create"> 
              <Create />
            </Route>
            <Route path="/BLogDetails/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <ErrorFile />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;