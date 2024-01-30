import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function Icon({ src, alt, width, height }: Props) {
  return <Image src={src} alt={alt} width={width} height={height} />;
}
