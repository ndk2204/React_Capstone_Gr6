import React from "react";
import css from "./card.module.scss";
import { Link } from "react-router-dom";

export type TCard = {
  id: number;
  image: string;
  name: string;
  shortDescription: string;
  price: number;
};

type Props = {
  data: TCard;
};

export function Card(props: Props) {
  const { data } = props;

  return (
    <div className={css["card"]}>
      <div className={css["content"]}>
        <img className={css["img"]} src={data.image} />

        <Link to={`/detail/${data.id}`} className={css["title"]}>
          {data.name}
        </Link>
        <p className={css["desc"]}>{data.shortDescription}</p>
      </div>

      <div className={css["action"]}>
        <Link className={css["action-buy"]} to={`/detail/${data.id}`}>
          Buy now
        </Link>
        <div className={css["action-price"]}>{data.price}$</div>
      </div>
    </div>
  );
}
