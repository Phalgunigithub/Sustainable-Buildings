import { configureStore ,createSlice} from "@reduxjs/toolkit";

const loadFavoritesFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};
//slice
const favoriteSlice = createSlice({
  name: "favorites", // Name of the slice (used in Redux DevTools)
  initialState: loadFavoritesFromLocalStorage(), // Load favorites from localStorage, // Initial state (empty array for storing favorite items)
  reducers: {
    //reducer functions (state-changing logic) (how state changes when  actions dispatched)
    addFavorite: (state, action) => {
      const newState = [...state, action.payload]; // Correct update
      localStorage.setItem("favorites", JSON.stringify(newState)); // Save to localStorage
      return newState;
    },
    removeFavorite: (state, action) => {
      const updatedFavorites = state.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update localStorage
      return updatedFavorites;
    },
  },
});

 
//export actions(used in components to dispatch actions)
export const { addFavorite,removeFavorite} = favoriteSlice.actions;


const store = configureStore({
    reducer : {
        favorites : favoriteSlice.reducer,
    },
});


export default store;





