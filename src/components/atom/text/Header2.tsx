type Props = {
  text: string;
};

export default function Header2({ text }: Props) {
  return (
    <div className="text-4xl md:text-5xl font-montserrat text-baseBlack">
      {text}
    </div>
  );
}
