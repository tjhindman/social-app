import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { Header } from "./components";
import { AuthUser, NewsFeed, Users, Profile, NotFound } from "./views";

import { useStore } from "./store";
import "./App.css";

const App = () => {
  const authUser = useStore((state) => state.authUser);

  return (
    <Container fluid bsPrefix className="App">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row style={{ paddingTop: "60px" }}>
        <Col>
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
