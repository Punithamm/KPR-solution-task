import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ListStudent from './components/list-student.component';
import EditStudent from './components/edit-student.component';
import CreateStudent from './components/create-student.component';
import DeleteStudent from './components/delete-student.component';

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <h1 className="navbar-brand"> MERN App</h1>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Student</Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="nav-link">List Student</Link>
              </li>
              
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={ListStudent} />
        <Route path="/edit/:id" component={EditStudent} />
        <Route path="/create" component={CreateStudent} />
        <Route path="/delete/:id" component={DeleteStudent} />
      </div>
    </Router>
  );
}

export default App;
