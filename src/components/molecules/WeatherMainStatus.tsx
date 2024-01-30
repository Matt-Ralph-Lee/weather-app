import Icon from "../atom/icon/Icon";
import Header1 from "../atom/text/Header1";

import vercelIcon from "../../../public/vercel.svg";

export default function WeatherMainStatus() {
  return (
    <div className="flex justify-center items-center my-24">
      <Header1 text="22°" />
      <Icon src={vercelIcon} alt="weather icon" width={90} height={90} />
    </div>
  );
}
