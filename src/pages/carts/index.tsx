import React from "react";
import css from "./carts.module.scss";
import ListCarts from "./list-carts";
function Carts() {
  return (
    <>
      <h1 className="title">Carts</h1>
      <div className="card text-center">
        <table className="table table-bordered table-hover myTable">

          <thead>
            <tr>
              <th className="col-1">
                <input type="checkbox" />
              </th>
              <th className="col-1 shoeID">ID</th>
              <th className="col-1">Image</th>
              <th className="col-1 col-md-2 shoeName">Name</th>
              <th className="col-1 shoePrice">Price</th>
              <th className="col-1 col-md-2">Quantity</th>
              <th className="col-1 total">Total</th>
              <th className="col-1 col-sm-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <ListCarts/>
          </tbody>
        </table>

        <div className="card-footer myCardFooter text-end">
          <h4 className="payment">
            Total Payment:
          </h4>
          <a href="#">
            <button className="btn btn-warning">SUBMIT ORDER</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Carts;
