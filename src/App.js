import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screen/home";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
