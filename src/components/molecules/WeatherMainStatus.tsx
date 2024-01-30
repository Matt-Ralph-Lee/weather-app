import Icon from "../atom/icon/Icon";
import Header1 from "../atom/text/Header1";

type Props = {
  temp: string;
  iconSrc: string;
};

export default function WeatherMainStatus({ temp, iconSrc }: Props) {
  return (
    <div className="flex justify-center items-center my-24">
      <Header1 text={`${temp}°`} />
      <Icon src={iconSrc} alt="weather icon" width={90} height={90} />
    </div>
  );
}
