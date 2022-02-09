import React, {useEffect, useState} from 'react';
import {Header} from "./components/Header";
import {SearchForm} from "./components/SearchForm/SearchForm";
import {CryptoList} from "./components/CryptoList";
import './App.css'
import axios from "axios";
import {ICoin} from "./types/types";

function App() {
    const [cryptoData,setCryptoData] = useState<ICoin[]>([])
    const [searchValue,setSearchValue] = useState<string>('bit')
    const [filther, setFilther] = useState<ICoin[]>(cryptoData)

    const fetchCryptoData = async () => {
        try{
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false')
            setCryptoData(response.data)
        }catch(e) {
            console.error(e)
        }
    }

    const resetSearchValue = () => {
        setSearchValue('')
    }

    useEffect(() => {
        if (searchValue){
            const array = cryptoData.filter(coin => coin.name.toLocaleLowerCase().includes(searchValue))
            setFilther(array)
        }
    },[searchValue])

    useEffect(() => {
        fetchCryptoData()
    },[])

  return (
    <div className='main'>
      <Header text={'Welcome to Crypto statistics'}/>
      <SearchForm value={searchValue} onChange={fetchCryptoData} onClick={resetSearchValue}/>
      <CryptoList cryptoData={filther}/>
    </div>
  );
}

export default App;
