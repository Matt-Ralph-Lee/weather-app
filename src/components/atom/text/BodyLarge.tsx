type Props = {
  text: string;
};

export default function BodyLarge({ text }: Props) {
  return (
    <div className="text-xl md:text-2xl font-montserrat text-baseBlack">
      {text}
    </div>
  );
}
