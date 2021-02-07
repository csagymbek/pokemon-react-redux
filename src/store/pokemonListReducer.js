const initialState = { loading: false, data: [], error: "", count: 0 };

export const pokemonListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "POKEMON_LIST_LOADING":
      return { ...state, loading: true, error: "" };
    case "POKEMON_LIST_SUCCESS":
      return {
        ...state,
        data: payload.results,
        count: payload.count,
        error: "",
        loading: false,
      };
    case "POKEMON_LIST_FAIL":
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
