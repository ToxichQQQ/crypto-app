import React, { FC } from "react";
import { ICoin } from "../../types/types";
import "./Coin.css";

interface CoinProps {
  coin: ICoin;
}

export const Coin: FC<CoinProps> = ({ coin }) => {
  const getPercentStyle = (val: number) => {
    if (val > 0) {
      return "incomeStyle";
    } else {
      return "declineStyle";
    }
  };

  return (
    <div className="container">
      <img src={coin.image} className="coinLogo" />
      <h5 className="coinText coinName">{coin.name}</h5>
      <p className="coinText coinSymbol">{coin.symbol}</p>
      <p className="coinText">$ {coin.current_price.toFixed(2)}</p>
      <p
        className={`coinText ${getPercentStyle(
          coin.price_change_percentage_24h
        )}`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="coinText">$ {coin.market_cap.toLocaleString("ru")}</p>
    </div>
  );
};
