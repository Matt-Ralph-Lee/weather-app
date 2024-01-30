import BodyMedium from "../atom/text/BodyMedium";
import BodySmall from "../atom/text/BodySmall";
import Header3 from "../atom/text/Header3";

export default function WeatherSubStatus() {
  return (
    <div className="flex items-center mt-12">
      <div className="flex flex-col items-center">
        <Header3 text="+1°" c="text-hotter" />
        <div className="mt-3">
          <BodySmall text="feels like" />
        </div>
      </div>

      <div className="w-px h-20 bg-baseBlack mx-10 md:mx-20"></div>

      <div className="flex flex-col items-center">
        <div className="flex items-end">
          <Header3 text="4.1" />
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
          <Header3 text="45" />
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
