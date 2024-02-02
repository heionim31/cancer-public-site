import logo from "../assets/logo-png.png";

export default function Header() {
  return (
    <header className="container h-[5rem] mx-auto bg-[#204C3E] text-[#FCFCFC] px-32 py-4 border-b-4 border-b-[#D9D9D9]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="h-12 w-auto mr-2" />
          </a>
          <div className="flex flex-col">
            <p className="text-[0.6rem] leading-tight">
              Republic of the Philippines
            </p>
            <p className="text-[0.8rem] font-bold leading-tight">
              PHILIPPINE CANCER CENTER
            </p>
            <p className="text-[0.5rem] leading-tight">
              Metro Manila Center for Health Development
            </p>
          </div>
        </div>
        <ul className="flex gap-x-14 text-[1rem]">
          <li>
            <a
              href="/"
              className="border-b-2 border-transparent hover:border-white py-2"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/cancer-data"
              className="border-b-2 border-transparent hover:border-white py-2"
            >
              Cancer Data
            </a>
          </li>
          <li>
            <a
              href="/data-methods"
              className="border-b-2 border-transparent hover:border-white py-2"
            >
              Data & Methods
            </a>
          </li>
          <li>
            <a
              href="/affiliates"
              className="border-b-2 border-transparent hover:border-white py-2"
            >
              Affiliates
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
