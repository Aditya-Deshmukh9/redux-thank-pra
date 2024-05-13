import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      console.log(data)
      return data
    } catch (error) {
      return error
    }
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    lists: [],
    error: '',
  },
  reducers: {
    fetchitems(state) {
      state.loading = false
    },
    fetchProducts(state, action) {
      state.loading = false
      state.error = action.payload || 'Something went wrong'
    },
    updateAllProducts(state, action) {
      state.loading = false
      state.lists = action.payload
      state.error = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      state.loading = false
      state.lists = action.payload.data
    })
  },
})

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer
