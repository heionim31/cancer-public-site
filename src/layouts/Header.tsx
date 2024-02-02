import logo from "../assets/pcc-logo.svg";
import NavLinks from "../components/Header/NavLinks";

export default function Header() {
  return (
    <header className="bg-[#204C3E] text-[#FCFCFC] px-4 sm:px-8 md:px-16 lg:px-32 py-4 border-b-4 border-b-[#D9D9D9] fixed top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mb-2 sm:mb-0">
            <a href="/">
              <img src={logo} alt="Logo" className="h-12 w-auto mr-2" />
            </a>
            <div className="flex flex-col">
              <p className="text-[0.6rem] leading-tight sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.8rem]">
                Republic of the Philippines
              </p>
              <p className="text-[0.8rem] font-bold leading-tight sm:text-[0.6rem] md:text-[0.7rem] lg:text-[1rem]">
                PHILIPPINE CANCER CENTER
              </p>
              <p className="text-[0.5rem] leading-tight sm:text-[0.4rem] lg:text-[0.6rem]">
                Metro Manila Center for Health Development
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
