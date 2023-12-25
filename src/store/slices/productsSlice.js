import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function(category, {rejectWithValue}){
    try{
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);

      const data = await response.json();

      if(!response.ok) {
        throw new Error('Failed to fetch categories.');
      }

      return data;

    } catch (e) {
      return  rejectWithValue('Failed to fetch products.');
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    error: false,
    loading: false,
  },
  reducers: {

  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export default productsSlice.reducer;
