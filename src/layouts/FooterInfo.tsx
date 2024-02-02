import logo from "../assets/pcc-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function FooterInfo() {
  return (
    <div className="grid grid-cols-2 gap bg-[#204C3E] text-white w-full h-48 place-content-center mx-auto relative">
      {/* Left Column */}
      <div className="flex items-center justify-end w-full pr-16 border-r border-white">
        <img src={logo} alt="PCC Logo" className="w-24 h-auto mr-10" />
        <div className="leading-loose text-xs font-semibold">
          <div>
            <FontAwesomeIcon icon={faLocationDot} className="mr-5" />
            <span>Quezon Ave, Diliman, Quezon City, 1100 Metro Manila</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="mr-5" />
            <span>(02) 8995 3846</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="mr-5" />
            <span>sample@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col justify-center pl-10 w-2/3">
        <p className="mb-4 text-md">
          The Philippine Cancer Center is one of the resistances, offering
          comprehensive care, research, and support to patients and their
          families.
        </p>
        <div className="self-end">
          <button className="text-sm bg-[#EBBC14] px-6 py-2 rounded-md hover:bg-[#FCD34D] mr-10">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
