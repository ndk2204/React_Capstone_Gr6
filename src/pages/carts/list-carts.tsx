import React, { useEffect, useState } from "react";
import { TCardItem } from "src/types";

type Props = {
  data: TCardItem[];
};
function ListCarts(props: Props) {
  let list = props.data;
  const [soluong, setSoLuong] = useState();
  return (
    <>
      {list.map((list: any, index: number) => {
        let total;
        total = (list.price * list.quantity).toLocaleString("en-US");
        let soluong = list.quantity;
        return (
          <tr key={index} className="table-list">
            <td className="check">
              <input type="checkbox" />
            </td>
            <td className="shoeID">{list.id}</td>
            <td className="shoeIMG">
              <img src={list.image} />
            </td>
            <td className="shoeName">{list.name}</td>
            <td className="shoePrice">{list.price}$</td>
            <td className="quantity">
              <button className="btn btn-dark">
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>{soluong}</span>
              <button
                onClick={() => {
                  setSoLuong((c) => {
                    c = soluong + 1;
                  });
                }}
                className="btn btn-dark"
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </td>
            <td className="total">{total}$</td>
            <td className="select">
              <button className="btn btn-info">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default ListCarts;
