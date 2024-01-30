"use client";

import { useState } from "react";
import SearchBar from "../molecules/SearchBar";
import PageTitle from "../molecules/PageTilte";
import WeatherTitle from "../molecules/WeatherTitle";
import WeatherMainStatus from "../molecules/WeatherMainStatus";
import WeatherSubStatus from "../molecules/WeatherSubStatus";

export default function WeatherSearch() {
  const [isSearched, setIsSearched] = useState(false);
  const [cityName, setCityName] = useState("");

  const [title, setTitle] = useState("City Name");
  const [time, setTime] = useState("0:00 AM");
  const [temp, setTemp] = useState("0.0");
  const [iconSrc, setIconSrc] = useState("../../../public/search.svg");
  const [feelsLike, setFeelsLike] = useState("0.0");
  const [wind, setWind] = useState("0.0");
  const [humidty, setHumidity] = useState("0.0");

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
      } else {
        setTitle(cityName);
        setTime(jsonData.time);
        setTemp(jsonData.temp);
        setIconSrc("");
        setFeelsLike(jsonData.feelsLike);
        setWind(jsonData.wind);
        setHumidity(jsonData.humidity);
        setIconSrc(jsonData.iconSrc);
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <WeatherTitle cityName={title} time={time} />
          <WeatherMainStatus temp={temp} iconSrc={iconSrc} />
          <WeatherSubStatus
            feelsLike={feelsLike}
            wind={wind}
            humidity={humidty}
          />
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <PageTitle />
        </div>
      )}
    </>
  );
}
