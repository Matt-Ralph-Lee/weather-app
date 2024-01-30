type Props = {
  text: string;
};

export default function Header2({ text }: Props) {
  return (
    <div className="text-5xl md:text-6xl font-montserrat text-baseBlack">
      {text}
    </div>
  );
}
