import "./App.css";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import { PokemonList } from "./components/PokemonList";
import { Pokemon } from "./components/Pokemon";

export const App = () => {
  return (
    <div className="app">
      <nav>
        <NavLink to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt=""
          />
        </NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={PokemonList} />
        <Route path="/pokemon/:id" exact component={Pokemon} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
