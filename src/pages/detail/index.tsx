import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "src/services/product.service";
import { IProduct } from "./detail.type";
import ListCard from "src/components/list-card";
import css from "./detail.module.scss";
import { getLocalStorage, setLocalStorage } from "src/utils";

type TParams = {
  productId: string;
};

function Detail() {
  //hook useParams
  const params = useParams<TParams>();
  const [productItem, setProductItem] = useState<IProduct>();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!params.productId) return;

    getProductById(params.productId)
      .then((resp) => {
        setProductItem(resp.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.productId]);

  const handleClick = () => {
    let localData = getLocalStorage("localCarts");
    const item = { ...productItem, quantity };

    if (localData !== null) {
      if (
        localData.map((shoe) => {
          shoe.id !== item.id;
        })
      ) {
        localData.push(item);
        setLocalStorage("localCarts", localData);
        console.log("-----1", localData);
      } else {
        console.log("-----2", localData);
      }
    } else {
      setLocalStorage("localCarts", [item]);
      console.log("-----3", localData);
    }
  };
  return (
    <div>
      <div className={css.boxDetail}>
        <div className={css.image}>
          <img src={productItem?.image} />
        </div>
        <div className={css.content}>
          <p className={css.nameShoe}>{productItem?.name}</p>
          <p className={css.dercShoe}>{productItem?.description}</p>
          <h3 className={css.available}>Available size</h3>
          <div className="listSize">
            {productItem?.size.map((size, index) => {
              return (
                <button key={index} className={css.sizeShoe}>
                  {size}
                </button>
              );
            })}
          </div>
          <p className={css.priceShoe}>{productItem?.price}$</p>
          <div className="Quantity">
            <button
              onClick={() => {
                setQuantity((c) => c + 1);
              }}
              className={css.btnQuantity}
            >
              +
            </button>
            <span className={css.quantity}>{quantity}</span>
            <button
              onClick={() => {
                quantity === 1
                  ? alert("Vui lòng kiểm tra số lượng để đặt hàng")
                  : setQuantity((c) => c - 1);
              }}
              className={css.btnQuantity}
            >
              -
            </button>
          </div>
          <button onClick={handleClick} className={css.addToCart}>
            Add to cart
          </button>
        </div>
      </div>
      <div>
        <h2 className={css.realate}>- Realate Product -</h2>

        {productItem?.relatedProducts && (
          <ListCard list={productItem.relatedProducts} />
        )}
      </div>
    </div>
  );
}

export default Detail;
