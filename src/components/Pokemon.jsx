import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../store/actions";
import _ from "lodash";

export const Pokemon = (props) => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.pokemonMultipleReducer);
  const pokemonName = props.match.params.id;

  useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      console.log(pokeData);
      return (
        <div className="pokemon-wrapper">
          <div className="item">
            <h2>sprites</h2>
            <img src={pokeData.sprites.front_default} alt="" />
            <img src={pokeData.sprites.back_default} alt="" />
            <img src={pokeData.sprites.front_shiny} alt="" />
            <img src={pokeData.sprites.back_shiny} alt="" />
          </div>
          <div className="item">
            <h2>stats</h2>
            {pokeData.stats.map((el) => (
              <p>
                {el.stat.name} {el.base_stat}
              </p>
            ))}
          </div>
          <div className="item">
            <h2>abilities</h2>
            {pokeData.abilities.map((el) => (
              <p>{el.ability.name}</p>
            ))}
          </div>
        </div>
      );
    }
    if (pokemonState.loading) {
      return <h2>Loading...</h2>;
    }
    if (pokemonState.error.length) {
      return <h2>{pokemonState.error}</h2>;
    }
    return <h2>Error getting pokemon</h2>;
  };

  return (
    <div className="poke">
      <h2 style={{ marginBottom: "40px" }}>{pokemonName.toUpperCase()}</h2>
      {showData()}
    </div>
  );
};
