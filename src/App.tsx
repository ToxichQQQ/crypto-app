import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { CryptoList } from "./components/CryptoList";
import axios from "axios";
import { ICoin } from "./types/types";
import "./App.css";
import { GET_ALL_COINS } from "./urls/urls";

function App() {
  const [cryptoData, setCryptoData] = useState<ICoin[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filter, setFilter] = useState<ICoin[]>(cryptoData);
  const [isLoading, setLoading] = useState(true);

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(GET_ALL_COINS);
      setCryptoData(response.data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const resetSearchValue = () => {
    setSearchValue("");
  };

  useEffect(() => {
    if (searchValue) {
      const array = cryptoData.filter((coin) =>
        coin.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
      setFilter(array);
    } else {
      setFilter(cryptoData);
    }
  }, [searchValue]);

  useEffect(() => {
    fetchCryptoData();
  }, []);

  useEffect(() => {
    setFilter(cryptoData);
  }, [cryptoData]);

  return (
    <div>
      <Header text="Welcome to Crypto statistics" />
      <SearchForm
        value={searchValue}
        onChange={changeSearchValue}
        onClick={resetSearchValue}
      />
      {isLoading && <h1 className="loadingText">Data Loading...</h1>}
      <CryptoList cryptoData={filter} />
    </div>
  );
}

export default App;
