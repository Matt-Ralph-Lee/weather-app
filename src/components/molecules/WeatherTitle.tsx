import BodyLarge from "../atom/text/BodyLarge";
import Header2 from "../atom/text/Header2";

export default function WeatherTitle() {
  return (
    <div className="flex flex-col w-4/5 justify-center items-center mt-20">
      <Header2 text="London" />
      <div className="mt-6">
        <BodyLarge text="7:00 AM" />
      </div>
    </div>
  );
}
