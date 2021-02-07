import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useEffect, useState } from "react";
import { getPokemonList } from "../store/actions";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export const PokemonList = (props) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const pokemonList = useSelector((state) => state.pokemonListReducer);

  useEffect(() => {
    fetchData(1);
  }, []);

  const fetchData = (page = 1) => {
    dispatch(getPokemonList(page));
  };

  const showData = () => {
    if (pokemonList.loading) {
      return <h1>Loading...</h1>;
    }
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="list-wrapper">
          {pokemonList.data.map(({ name }) => (
            <div key={name} className="pokemon-item">
              <Link to={`/pokemon/${name}`}>
                <p>{name.toUpperCase()}</p>
              </Link>
            </div>
          ))}
        </div>
      );
    }

    if (pokemonList.error.length) {
      return <h1>pokemonList.error</h1>;
    }
    return <h1>Unable to get data</h1>;
  };

  return (
    <div>
      <div className="search-wrapper">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => props.history.push(`/pokemon/${search}`)}>
          SEARCH
        </button>
      </div>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => fetchData(data.selected + 1)}
          containerClassName="pagination"
        />
      )}
    </div>
  );
};
