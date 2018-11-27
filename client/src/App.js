import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <Nav />
      <Route exact path='/' component={Books} />
      <Route exact path='/saved' component={Books} />
      <Route exact path='/books/:id' component={Detail}/>
    </div>
    </BrowserRouter>
);

export default App;
