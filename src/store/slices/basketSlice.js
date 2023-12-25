import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
    },
    reducers: {
        addNewItem: (state, action) => {
            if(state.items.find(item => item.id === action.payload.id)) {
                state.items = state.items.map((item) => {
                    if(item.id === action.payload.id) {
                        return {...item, countNumber: item.countNumber + 1}
                    }

                    return item;
                });
            } else {
                state.items.push({...action.payload, countNumber: 1});
            }
        },
        changeItemCount: (state, action) => {
            if(action.payload.sign === 'plus') {
                state.items = state.items.map((item) => {
                    if(item.id === action.payload.id) {
                        return {...item, countNumber: item.countNumber + 1}
                    }

                    return item;
                });
            } else {
                state.items = state.items.map((item) => {
                    if(item.id === action.payload.id) {
                        if(item.countNumber === 0) {
                            return item;
                        } else {
                            return {...item, countNumber: item.countNumber - 1}
                        }
                    }

                    return item;
                });
            }
        }
    }
});

export const {
    addNewItem,
    changeItemCount,
} = basketSlice.actions;

export default basketSlice.reducer;
