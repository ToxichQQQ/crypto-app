import React, {FC} from "react";
import {ICoin} from "../../types/types";
import './Coin.css'

interface CoinProps {
    coin: ICoin
}

export const Coin: FC <CoinProps> = ({coin}) => {
    return(
        <div className='container'>
            <img src={coin.image} className='coinLogo'/>
            <h5 className='coinText coinName'>{coin.name}</h5>
            <p className='coinText coinSymbol'>{coin.symbol}</p>
            <p className='coinText'>$ {coin.current_price.toFixed(2)}</p>
            <p className='coinText'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='coinText'>$ {coin.market_cap}</p>
        </div>
    )
}