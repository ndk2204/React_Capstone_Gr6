import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setgioHang } from "src/redux/slices/product.slice";
import { TCardItem } from "src/types";
import { getLocalStorage, setLocalStorage } from "src/utils";

type Props = {
  data: TCardItem[];
  setData: (id:number) => void;
};

function ListCarts({ data, setData }: Props) {
  // let list = props.data;
  // let localData = getLocalStorage("localCarts");
  const dispatch = useDispatch();
  const localData = getLocalStorage("localCarts");

  const handleClickUp = (id: any) => {
    const findIndex = localData?.find((item: any) => item.id === id);
    findIndex.quantity += 1;

    // item.quantity += 1;
    // console.log(item.id);
    // console.log(item.quantity);
    const action = setgioHang(localData);
    dispatch(action);
    setLocalStorage("localCarts", localData);
    setData(localData);
  };

  const handleClickDown = (id: any) => {
    const findIndex = localData?.find((item: any) => item.id === id);
    findIndex.quantity -= 1;
    const action = setgioHang(localData);
    dispatch(action);
    setLocalStorage("localCarts", localData);
    setData(localData);
  };
  return (
    <>
      {data.map((list: any, index: number) => {
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
              <button
                onClick={() => handleClickDown(list.id)}
                className="btn btn-dark"
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <span>{list.quantity}</span>
              <button
                onClick={() => handleClickUp(list.id)}
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
