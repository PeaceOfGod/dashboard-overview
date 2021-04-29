import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Pages/DashboardPage/Dashboard';
import OverviewNav from './components/Pages/OverviewPage/OverviewNav';


function App() {
  return (
    <div>
      <React.Fragment>
          <Router>
            <Switch>
              <Route path="/" exact component={Dashboard}></Route>
              <Route path="/overview-nav" component={OverviewNav}></Route>
            </Switch>
          </Router>
        </React.Fragment>      
    </div>
  );
}

export default App;
