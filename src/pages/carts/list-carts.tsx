import React from "react";

function ListCarts() {
  return (
    <>
      {/* {props.list.map((item) => {
        return ( */}
      <tr className="table-list">
        <td className="col-1">
          <input type="checkbox" />
        </td>
        <td className="shoeID">ID</td>
        <td className="shoeIMG">Image</td>
        <td className="shoeName">Namfdsfdsfdse</td>
        <td className="shoePrice">Price</td>
        <td className="quantity">
          <button className="btn btn-dark">
            <i className="fa-solid fa-minus"></i>
          </button>
          <span id="quantityClick${shoe.id}">1</span>
          <button className="btn btn-dark">
            <i className="fa-solid fa-plus"></i>
          </button>
        </td>
        <td className="total">Total</td>
        <td className="">
          <button className="btn btn-info">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
      {/* );
      })} */}
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
