type Props = {
  text: string;
};

export default function BodyMedium({ text }: Props) {
  return (
    <div className="text-base md:text-xl font-montserrat text-baseBlack">
      {text}
    </div>
  );
}
