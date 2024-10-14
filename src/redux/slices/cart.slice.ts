import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface cartState {
 id:string | number;
 name:string ;
 image:string;
 info:string;
}

// Define the initial state using that type
const initialState: cartState[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCard: (state, action:PayloadAction<cartState>) => { 
      const exists = state.some((item) => item.id === action.payload.id);
      if (state.length == 0 || !exists ) {
        state.push(action.payload)
      }
    },
    removeToCard: () => { }
  },
})

export const { addToCard ,removeToCard} = cartSlice.actions

