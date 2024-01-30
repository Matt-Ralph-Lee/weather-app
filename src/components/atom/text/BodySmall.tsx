type Props = {
  text: string;
};

export default function BodySmall({ text }: Props) {
  return (
    <div className="text-xs md:text-base font-montserrat text-baseBlack">
      {text}
    </div>
  );
}
