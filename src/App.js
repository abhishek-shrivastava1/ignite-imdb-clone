// Pages
import Home from "./pages/Home";
// Router
import { Route } from "react-router-dom";
//Styles
import GlobalStyles from "./styles/GlobalStyles";
// Components
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/games/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
