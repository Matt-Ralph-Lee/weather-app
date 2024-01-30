type Props = {
  text: string;
  c?: string;
};

export default function Header3({ text, c }: Props) {
  return (
    <div
      className={`text-3xl md:text-4xl font-montserrat ${
        c ? c : "text-baseBlack"
      }`}
    >
      {text}
    </div>
  );
}
