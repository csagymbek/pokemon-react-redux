import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer";
import { pokemonMultipleReducer } from "./pokemonMultipleReducer";

export const rootReducer = combineReducers({
  pokemonListReducer,
  pokemonMultipleReducer,
});
