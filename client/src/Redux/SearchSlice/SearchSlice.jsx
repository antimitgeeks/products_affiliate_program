import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  defaultSearch:'',
  searchQuery: '',
  customerAffiliateQuery:'',
  dashboardQuery: '',
  invoiceQuery: '',
  customerInvoiceQuery:''
}

const SearchSlice = createSlice({
  name: 'SearchSlice',
  initialState,
  reducers: {
    SetSearchInput: (state, action) => {
      state.searchQuery = action.payload
    },
    SetCustomerAffiliateInput: (state, action) => {
      state.customerAffiliateQuery = action.payload
    },
    SetDashboardSearchInput: (state, action) => {
      state.dashboardQuery = action.payload
    },
    SetInvoiceSearchInput: (state, action) => {
      state.invoiceQuery = action.payload
    },
    SetCustomerInvoiceSearchInput: (state, action) => {
      state.customerInvoiceQuery = action.payload
    },
    SetDefaultSearchInput: (state, action) => {
      state.defaultSearch = action.payload
    },

  },
})

export const { SetSearchInput, SetDashboardSearchInput ,SetInvoiceSearchInput ,SetDefaultSearchInput , SetCustomerInvoiceSearchInput ,SetCustomerAffiliateInput } = SearchSlice.actions
export default SearchSlice.reducer; 