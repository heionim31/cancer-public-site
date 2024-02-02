import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

interface TextProps {
  buttonTitle: string;
}

const Button: React.FC<TextProps> = ({ buttonTitle }) => {
  return (
    <>
      <button className="text-sm mt-10 bg-[#204A31] bg-opacity-90 text-white px-4 py-2 self-end rounded-sm mr-10 flex items-center hover:bg-[#30673F] hover:bg-opacity-90 transition-all duration-300">
        <span>{buttonTitle}</span>
        <FontAwesomeIcon
          icon={faGreaterThan}
          className="pt-1 pl-2 text-[0.6rem] font-medium"
        />
      </button>
    </>
  );
};

export default Button;
