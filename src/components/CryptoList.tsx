import React, {FC} from 'react'
import {ICoin} from '../types/types'
import {Coin} from "./Coin/Coin";

interface cryptoList {
    cryptoData: ICoin[],
}

export const CryptoList: FC<cryptoList> = ({cryptoData}) => {
    return (
        <div style={{maxWidth:'80vw',margin:'0 auto'}}>
            {cryptoData.map(coin => <Coin key={coin.id} coin={coin}/>)}
        </div>
    )
}