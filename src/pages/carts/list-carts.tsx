import React from "react";
import { getLocalStorage } from "src/utils";

function ListCarts() {
  let list = getLocalStorage("itemCarts")
  console.log(list)
  return (
    <>

      <tr className="table-list">
        <td className="check">
          <input type="checkbox" />
        </td>
        <td className="shoeID">{list.id}</td>
        <td className="shoeIMG">
          <img src={list.image} /></td>
        <td className="shoeName">{list.name}</td>
        <td className="shoePrice">{list.price}$</td>
        <td className="quantity">
          <button className="btn btn-dark">
            <i className="fa-solid fa-minus"></i>
          </button>
          <span>{list.quantity}</span>
          <button className="btn btn-dark">
            <i className="fa-solid fa-plus"></i>
          </button>
        </td>
        <td className="total">{list.price * list.quantity}</td>
        <td className="select">
          <button className="btn btn-info">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>

    </>
  );
}

export default ListCarts;

// type Props = {
//   list: TCard[];
// };

// function ListCard(props: Props) {
//   return (
//     <div className={css["list-card"]}>
//       {props.list.map((item) => {
//         return <Card key={item.id} data={item} />;
//       })}
//     </div>
//   );
// }