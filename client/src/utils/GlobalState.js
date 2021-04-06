import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
import { createSlice, configureStore } from '@reduxjs/toolkit';


const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  },
  reducers: {
    selectCategory: state => {
      state.currentCategory  
    } 
  }
})
//const StoreContext = createContext();
//const { Provider } = StoreContext;

/*const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};*/

export { StoreProvider, useStoreContext };
