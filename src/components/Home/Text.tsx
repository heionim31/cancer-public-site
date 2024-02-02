interface TextProps {
  title: string;
  content: string;
}

const Text: React.FC<TextProps> = ({ title, content }) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#434443] mb-10">{title}</h2>
      <p className="text-lg text-[#5C5757] mb-4 leading-relaxed">{content}</p>
    </>
  );
};

export default Text;
