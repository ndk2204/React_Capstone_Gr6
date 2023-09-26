import React, { useState } from "react";
import css from "./carts.module.scss";
import ListCarts from "./list-carts";
import { getLocalStorage } from "src/utils";
import { TCardItem } from "src/types";
import { useAppSelector } from "src/redux/config-store";

// type Props = {
//   data: TCardItem[];
// };
function Carts(props: any) {
  // const data = useAppSelector((state)=> state.productReducer.gioHang)
  let dataLocal = getLocalStorage("localCarts");
  const [data, setData] = useState(dataLocal);
  let sum = 0;
  dataLocal.map((item: any) => {
    sum += item.price * item.quantity;
    return sum;
  });
  return (
    <>
      <div className="container cart">
        <h1 className="title">Carts</h1>
        <div className="card text-center">
          <table className="table table-bordered table-hover myTable">
            <thead>
              <tr>
                <th className="col-1 check">
                  <input className="check" type="checkbox" />
                </th>
                <th className="col-1 shoeID">ID</th>
                <th className="col-2">Image</th>
                <th className="col-2 col-md-2 shoeName">Name</th>
                <th className="col-1 shoePrice">Price</th>
                <th className="col-2 col-md-2">Quantity</th>
                <th className="col-1 total">Total</th>
                <th className="col-2 col-sm-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <ListCarts data={data} setData={setData} />
            </tbody>
          </table>

          <div className="card-footer myCardFooter text-end">
            <h4 className="payment">
              Total Payment:{" "}
              <span className="total-price">
                {sum.toLocaleString("en-US")}$
              </span>{" "}
            </h4>

            <button className="btn btn-submit">SUBMIT ORDER</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carts;
