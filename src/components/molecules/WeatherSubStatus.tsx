import BodyMedium from "../atom/text/BodyMedium";
import BodySmall from "../atom/text/BodySmall";
import Header3 from "../atom/text/Header3";

type Props = {
  feelsLike: string;
  wind: string;
  humidity: string;
};

export default function WeatherSubStatus({ feelsLike, wind, humidity }: Props) {
  const feelsLikeColor = feelsLike.includes("+")
    ? "text-hotter"
    : "text-colder";
  return (
    <div className="flex items-center mt-12">
      <div className="flex flex-col items-center">
        <Header3 text={feelsLike} c={feelsLikeColor} />
        <div className="mt-3">
          <BodySmall text="feels like" />
        </div>
      </div>

      <div className="w-px h-20 bg-baseBlack mx-10 md:mx-20"></div>

      <div className="flex flex-col items-center">
        <div className="flex items-end">
          <Header3 text={wind} />
          <div className="ml-2">
            <BodyMedium text="m/s" />
          </div>
        </div>
        <div className="mt-3">
          <BodySmall text="wind" />
        </div>
      </div>

      <div className="w-px h-20 bg-baseBlack mx-10 md:mx-20"></div>

      <div className="flex flex-col items-center">
        <div className="flex items-end">
          <Header3 text={humidity} />
          <div className="ml-2">
            <BodyMedium text="%" />
          </div>
        </div>
        <div className="mt-3">
          <BodySmall text="humidty" />
        </div>
      </div>
    </div>
  );
}
