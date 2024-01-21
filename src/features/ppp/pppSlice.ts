import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import type { PPPData } from "@/types/PPPData";

// Define a type for the slice state
type CountriesPPPState = {
  pppSourceCountry: PPPData | null;
  pppTargetCountry: PPPData | null;
};

// Define the initial state using that type
const initialState = {
  pppSourceCountry: null,
  pppTargetCountry: null,
} as CountriesPPPState;

export const pppSlice = createSlice({
  name: "pppData",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSourceCountryPPPData: (state, action: PayloadAction<PPPData>) => {
      state.pppSourceCountry = action.payload;
    },
    setTargetCountryPPPData: (state, action: PayloadAction<PPPData>) => {
      state.pppTargetCountry = action.payload;
    },
  },
});

export const { setSourceCountryPPPData, setTargetCountryPPPData } =
  pppSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const countriesState = (state: RootState) => state.countriesReducer;

export default pppSlice.reducer;
