import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async function(_, {rejectWithValue}){
    try{
      const response = await fetch('https://fakestoreapi.com/products/categories');

      const data = await response.json();

      if(!response.ok) {
        throw new Error('Failed to fetch categories.');
      }

      return data.map(category => {
        return {
          categoryName: category,
          id: Math.random()
        }
      });

    } catch (e) {
      return  rejectWithValue('Failed to fetch categories.');
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    error: false,
    loading: false,
    todo: [],
    user: [],
    images: [],
  },
  reducers: {

  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = true;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

export default categoriesSlice.reducer;
