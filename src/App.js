import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ColorModeContainer from "./components/ColorModeContainer"
import Account from "./pages/Account"
import TodosApp from "./pages/TodosApp"
import Home from "./pages/Home"
import Navigations from "./components/Navigations"

function App() {
  return (
    <ColorModeContainer>
      <div className="container my-4">
        <h1 className="text-center">ToDos App</h1>
        <Router>
          <Navigations />
          <Switch>
            <Route path="/todos">
              <TodosApp />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </ColorModeContainer>
  )
}

export default App
