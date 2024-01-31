"use client";

import { useState } from "react";
import SearchBar from "../molecules/SearchBar";
import PageTitle from "../molecules/PageTilte";
import WeatherTitle from "../molecules/WeatherTitle";
import WeatherMainStatus from "../molecules/WeatherMainStatus";
import WeatherSubStatus from "../molecules/WeatherSubStatus";

export default function WeatherSearch() {
  const [isErr, setIsErr] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [cityName, setCityName] = useState("");

  const [title, setTitle] = useState("--");
  const [time, setTime] = useState("-:-- AM");
  const [temp, setTemp] = useState("--");
  const [iconSrc, setIconSrc] = useState("");
  const [feelsLike, setFeelsLike] = useState("--");
  const [wind, setWind] = useState("--");
  const [humidty, setHumidity] = useState("--");

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSearched) {
      setIsSearched(true);
    }

    try {
      const response = await fetch(`api/fetchWeather?city=${cityName}`, {
        method: "GET",
      });
      const jsonData = await response.json();
      console.log(jsonData);
      if (jsonData.error) {
        console.log("error");
        setIsErr(true);
      } else {
        setTitle(cityName);
        setTime(jsonData.time);
        setTemp(jsonData.temp);
        setIconSrc("");
        setFeelsLike(jsonData.feelsLike);
        setWind(jsonData.wind);
        setHumidity(jsonData.humidity);
        setIconSrc(jsonData.iconSrc);
        setIsErr(false);
      }
    } catch (err) {
      console.log(err);
      setIsErr(true);
    }
  };

  return (
    <>
      <div className="flex flex-col h-1/6 justify-end items-center">
        {isErr && (
          <div className="font-montserrat text-rose-600 mb-2">
            Please check your input
          </div>
        )}
        <SearchBar
          cityName={cityName}
          setCityName={setCityName}
          handleSearch={handleSearch}
        />
      </div>
      {isSearched ? (
        <>
          <div className="w-full h-4/6 flex flex-col justify-between items-center">
            <WeatherTitle cityName={title} time={time} />
            <WeatherMainStatus temp={temp} iconSrc={iconSrc} />
            <WeatherSubStatus
              feelsLike={feelsLike}
              wind={wind}
              humidity={humidty}
            />
          </div>
          <div className="h-1/6"></div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-4/6">
            <PageTitle />
          </div>
          <div className="h-1/6"></div>
        </>
      )}
    </>
  );
}
