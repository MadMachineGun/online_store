import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './slices/productsSlice';
import categoryReducer from './slices/categorySlice';
import basketReducer from './slices/basketSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
    categories: categoryReducer,
    basket: basketReducer,
  }
})
