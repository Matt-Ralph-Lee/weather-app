import BodyLarge from "../atom/text/BodyLarge";
import Header2 from "../atom/text/Header2";

type Props = {
  cityName: string;
  time: string;
};

export default function WeatherTitle({ cityName, time }: Props) {
  return (
    <div className="flex flex-col w-4/5 justify-center items-center mt-20">
      <Header2 text={cityName} />
      <div className="mt-6">
        <BodyLarge text={time} />
      </div>
    </div>
  );
}
