import Button from "../../components/Home/Button";
import Image from "../../components/Home/Image";
import Text from "../../components/Home/Text";
import cardImage from "../../assets/home-img1.png";

export default function Container3() {
  const title = "We fight together with cancer";
  const content =
    "A repository of cancer information is the cornerstone of medical progress, paving the way for early detection, improved outcomes, and a brighter tomorrow for patients.";
  const buttonTitle = "View Cancer Data";

  return (
    <div className="grid grid-cols-2 h-screen place-items-center px-64 bg-[#ffffff]">
      {/* Column 1 */}
      <Image cardImage={cardImage} />

      {/* Column 2 */}
      <div className="flex flex-col col-span-1 w-11/12">
        <Text title={title} content={content} />
        <Button buttonTitle={buttonTitle} />
      </div>
    </div>
  );
}
