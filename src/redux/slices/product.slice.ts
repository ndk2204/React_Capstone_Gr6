import { createSlice } from "@reduxjs/toolkit";
import { TCardItem } from "src/types";
//createSlice của reduxjs/toolkit, gom tổng hợp 3 folder action,constant,reduce

type TState = {
  listProduct: TCardItem[];
};

const initialState: TState = {
  listProduct: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    // name + reducer: productSlice/setListProduct
    setListProduct: (state, action) => {
      //1. Cách cũ. có return
      // return {
      //   ...state,
      //   listProduct: action.payload,
      // };

      //2. redux + immer: giúp chúng ta clone object, không cần quan tâm đến địa chỉ.
      // không cần dùng return
      state.listProduct = action.payload;
    },
  },
});

// Bóc tách ra action creator của Redux
export const { setListProduct } = productSlice.actions;

//productSlice tạo ra hàm reducer, chấm đến để sử dụng reducer
export default productSlice.reducer;

// ----- VD Cách createSlice tạo ra reducer -----
const __createSlice = () => {
  return {
    reducer: (state = initialState, action: any) => {
      switch (action.type) {
        case "": {
          //
        }
      }
    },
  };
};

//VD cách chạy createSlice
const number = 1;
// cham hon, do ton tai nguyen
switch (number) {
  case 1: {
    // console.log("so mot");
    break;
  }
  default:
    console.log("....");
}
// nhanh hon, ton tai nguyen
const obj = {
  "1": () => {
    // console.log("so mot");
  },
  "2": () => {
    // console.log("so hai");
  },
};
obj[1]();
// mapper
