import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../productData";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: "",
  },
  reducers: {
    addToCart: ((state, action) => {
        state.value = ""
    })
  },
});

