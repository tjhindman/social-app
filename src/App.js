import { Route, Switch } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Header } from "./components";
import { AuthUser, NewsFeed, Users, Profile, NotFound } from "./views";

import { useStore } from "./store";
import "./App.css";

const App = () => {
  const authUser = useStore((state) => state.authUser);

  return (
    <Container fluid={true} className="App">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row style={{ paddingTop: "7vh", height: "100vh" }}>
        <Col style={{ height: "100%" }}>
          {/* if there is no user token should render this Switch component */}
          {!authUser.token ? (
            <Switch>
              <Route exact path="/" component={AuthUser} />
              <Route path="*" component={NotFound} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={NewsFeed} />
              <Route path="/users" component={Users} />
              <Route path="/profile" component={Profile} />
              <Route path="*" component={NotFound} />
            </Switch>
          )}
          {/* if there is a user token should render this Switch component */}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
