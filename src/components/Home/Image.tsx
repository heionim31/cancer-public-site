interface TextProps {
  cardImage: string;
}

const Image: React.FC<TextProps> = ({ cardImage }) => {
  return (
    <div className="col-span-1">
      <img
        src={cardImage}
        alt="Doctor"
        className="max-w-[32rem] h-auto object-cover"
      />
    </div>
  );
};

export default Image;
