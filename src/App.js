import { Route, Switch } from "react-router-dom";

import { Navbar } from "./components";
import { Login, NotFound } from "./views";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* if there is no user token should render this Switch component */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
      {/* 
      * if there is a user token should render this Switch component

      <Switch>
        <Route exact path="/" component={NewsFeed} />
        <Route path="/users" component={Users} />
        <Route path="/profile" component={Profile} />
        <Route path="*" component={NotFound} />
      </Switch>
      
      */}
    </div>
  );
};

export default App;
