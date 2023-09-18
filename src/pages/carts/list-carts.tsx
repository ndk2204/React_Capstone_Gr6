import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setgioHang } from "src/redux/slices/product.slice";
import { TCardItem } from "src/types";
import { getLocalStorage, setLocalStorage } from "src/utils";

type Props = {
  data: TCardItem[];
};

function ListCarts() {
  // let list = props.data;
  let localData = getLocalStorage("localCarts");
  const dispatch = useDispatch();

  const handleClick = (item: any) => {
    item.quantity += 1;
    console.log(item.id);
    console.log(item.quantity);

    setLocalStorage("localCarts", localData);
    const action = setgioHang(localData);
    dispatch(action);
  };

  return (
    <>
      {localData.map((list: any, index: number) => {
        let total;
        total = (list.price * list.quantity).toLocaleString("en-US");
        return (
          <tr key={index} className="table-list">
            <td className="check">
              <input className="check" type="checkbox" />
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
              <span>{list.quantity}</span>
              <button
                onClick={() => handleClick(list)}
                // onClick={() => {
                //   let localData = getLocalStorage("localCarts");

                //   list.quantity += 1;
                //   console.log(list.id)
                //   console.log(list.quantity);

                //   setLocalStorage("localCarts", localData);

                //   const action = setgioHang(localData);
                //   dispatch(action);
                // }}
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
