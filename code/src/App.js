import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { products } from "reducers/products";
import { ui } from "reducers/ui";
import { ScanBarcode } from "components/ScanBarcode";
import { LoadingIndicator } from "components/LoadingIndicator";

export const reducer = combineReducers({
  ui: ui.reducer,
  products: products.reducer
});

export const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <ScanBarcode />
    </Provider>
  );
};
