type Props = {
  text: string;
};

export default function BodyLarge({ text }: Props) {
  return (
    <div className="text-2xl md:text-3xl font-montserrat text-baseBlack">
      {text}
    </div>
  );
}
