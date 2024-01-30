"use client";

import { useState } from "react";
import SearchBar from "../molecules/SearchBar";
import PageTitle from "../molecules/PageTilte";
import WeatherTitle from "../molecules/WeatherTitle";
import WeatherMainStatus from "../molecules/WeatherMainStatus";
import WeatherSubStatus from "../molecules/WeatherSubStatus";

export default function () {
  const [isSearched, setIsSearched] = useState(false);
  const [cityName, setCityName] = useState("");

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isSearched) {
      setIsSearched(true);
    }
  }

  return (
    <>
      <div className="w-full mt-20 absolute flex justify-center">
        <SearchBar
          cityName={cityName}
          setCityName={setCityName}
          handleSearch={handleSearch}
        />
      </div>
      {isSearched ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <WeatherTitle />
          <WeatherMainStatus />
          <WeatherSubStatus />
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <PageTitle />
        </div>
      )}
    </>
  );
}
