import { createSlice } from "@reduxjs/toolkit";
import { TCardItem } from "src/types";
import { getLocalStorage } from "src/utils";
//createSlice của reduxjs/toolkit, gom tổng hợp 3 folder action,constant,reduce

type TState = {
  listProduct: TCardItem[];
  gioHang: TCardItem[];

};

let dataLocal = getLocalStorage("localCarts");

const initialState: TState = {
  listProduct: [],
  gioHang :dataLocal
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
    setgioHang: (state, action) => {
      state.gioHang = action.payload;
    },

  },
});

// Bóc tách ra action creator của Redux
export const { setListProduct,setgioHang } = productSlice.actions;

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
    // console.log("....");
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
