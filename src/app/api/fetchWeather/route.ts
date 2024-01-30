import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cityName = request.nextUrl.searchParams.get("city");

  try {
    const serverResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    const data = await serverResponse.json();
    if (data?.cod == "400") throw data;

    return NextResponse.json({
      error: false,
      temp: data.main.temp.toFixed(1),
      feelsLike: processFeelsLike(data.main.feels_like - data.main.temp),
      humidity: data.main.humidity.toFixed(1),
      time: toStrTime(data.dt, data.timezone),
      wind: data.wind.speed.toFixed(1),
      iconSrc: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: true });
  }
}

function toStrTime(unixtime: number, diff: number) {
  const dateTime = new Date((unixtime + diff) * 1000);

  const hours = dateTime.getUTCHours();
  const minutes = dateTime.getUTCMinutes();

  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  return `${formattedHours}:${formattedMinutes} ${period}`;
}

function processFeelsLike(num: number) {
  return num >= 0 ? "+" + num.toFixed(1) : num.toFixed(1);
}
