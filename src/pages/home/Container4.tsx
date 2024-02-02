import Button from "../../components/Home/Button";
import Image from "../../components/Home/Image";
import Text from "../../components/Home/Text";
import cardImage from "../../assets/home-img2.png";

export default function Container4() {
  const title = "Compassion Connecting Lives";
  const content =
    "A reservoir of cancer knowledge serves as the foundation for advancements in medical research, leading the path towards early identification, enhanced results, and a more promising future for individuals facing the challenges of cancer.";
  const buttonTitle = "View Affiliates";

  return (
    <div className="grid grid-cols-2 h-screen place-items-center px-64 bg-[#F5F5F5] bg">
      {/* Column 1 */}
      <div className="flex flex-col col-span-1 w-5/6">
        <Text title={title} content={content} />
        <Button buttonTitle={buttonTitle} />
      </div>

      {/* Column 2 */}
      <Image cardImage={cardImage} />
    </div>
  );
}
