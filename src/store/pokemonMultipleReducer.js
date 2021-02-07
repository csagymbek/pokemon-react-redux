const initialState = {
  loading: false,
  data: {},
  error: "",
};

export const pokemonMultipleReducer = (
  state = initialState,
  { type, payload, pokemonName }
) => {
  switch (type) {
    case "POKEMON_MULTIPLE_LOADING":
      return { ...state, loading: true, error: "" };
    case "POKEMON_MULTIPLE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: { ...state.data, [pokemonName]: payload },
        error: "",
      };
    case "POKEMON_MULTIPLE_LOADING":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
