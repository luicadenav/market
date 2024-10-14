import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface cartState {
 id:string | number;
 name:string ;
 image:string;
 info:string;
}

interface CartRemoveState {
  id: string | number;
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
    removeToCart: (state, action:PayloadAction<CartRemoveState>) => {
       const { id } = action.payload;
      if(state.some((item)=> item.id === id)){
        return state = state.filter((item)=> item.id !== id)
      }
     }
  },
})

export const { addToCard , removeToCart} = cartSlice.actions

