import backgroundImage from "../../assets/home-bg.png";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";

export default function HomePage() {
  return (
    <div>
      <div
        className="relative grid grid-cols-2 h-screen bg-cover bg-center bg-no-repeat place-items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Background Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(266.15deg, rgba(7, 7, 7, 0.65) 32.47%, rgba(88, 88, 88, 0.4) 92.47%)",
          }}
        ></div>

        {/* Left Column */}
        <div className="col-span-1"></div>

        {/* Right Column - Main Content */}
        <div className="flex flex-col items-center justify-center col-span-1 z-10">
          <div className="max-w-md p-4">
            <p className="text-[#F6C000] text-md font-semibold">
              Strength in Unity, Healing in Progress
            </p>
            <h1 className="text-5xl text-white leading-tight font-bold">
              Innovating Today for a Cancer-Free Tomorrow
            </h1>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="absolute bottom-0 mb-5 text-white">
          <p className="font-light">
            In the face of adversity, hope shines brightest. Let us be your
            beacon of hope, providing not just data but a source of inspiration,
            encouragement, and solidarity. Together, we are stronger than
            cancer.
          </p>
        </div>
      </div>

      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}
