import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/redux/store'
import type Country from '@/types/Country'

// Define a type for the slice state
interface CountriesState {
  sourceCountry: Country,
  targetCountry: Country
}

// Define the initial state using that type
const initialState = {
    sourceCountry: {countryCode:"IN",countryName:"India",currencyCode:"INR"},
    targetCountry: {countryCode:"US",countryName:"United States",currencyCode:"USD"}
} as CountriesState

export const countrySlice = createSlice({
  name: 'country',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSourceCountry: (state,action:PayloadAction<Country>) => {
        state.sourceCountry = action.payload
    },
    setTargetCountry: (state,action:PayloadAction<Country>) => {
        state.targetCountry = action.payload
    },
  },
})

export const { setSourceCountry, setTargetCountry } = countrySlice.actions

// Other code such as selectors can use the imported `RootState` type
export const countriesState = (state: RootState) => state.countriesReducer

export default countrySlice.reducer