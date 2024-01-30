type Props = {
  text: string;
};

export default function Header1({ text }: Props) {
  return (
    <div className="text-6xl md:text-8xl font-montserrat text-baseBlack">
      {text}
    </div>
  );
}
