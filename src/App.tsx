import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {SearchForm} from "./components/SearchForm";
import {CryptoList} from "./components/CryptoList";
import './App.css'
import axios from "axios";

function App() {
    const [cryptoData,setCryptoData] = useState([])
    const [searchValue,setSearchValue] = useState('')

    const fetchCryptoData = async () => {
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            setCryptoData(response.data)
            console.log('finish')
        }catch(e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchCryptoData()
    },[])

  return (
    <div className='main'>
      <Header text={'Welcome to Crypto statistics'}/>
      <SearchForm value={searchValue} onChange={fetchCryptoData} onClick={fetchCryptoData}/>
      <CryptoList cryptoData={cryptoData}/>
    </div>
  );
}

export default App;
