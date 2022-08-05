
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
//import { fetchCount } from './counterAPI';

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
{/*
export const incrementAsync = createAsyncThunk( 'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);
*/}

export interface TodosState {
    currentSectionID: String | null
    currentSectionTitle: any
}

const initialState: TodosState = {
    currentSectionID: null,
    currentSectionTitle: 'untitled'
};


export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCurrentSectionID: (state, action: PayloadAction<String>) => {state.currentSectionID = action.payload},
    setCurrentSectionTitle: (state, action: PayloadAction<String>) => {state.currentSectionTitle = action.payload}
  },
  extraReducers: 
  {}
}
);

export const {setCurrentSectionID, setCurrentSectionTitle} = todosSlice.actions;
export default todosSlice.reducer;
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
//export const selectCount = (state: RootState) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
/*
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
*/