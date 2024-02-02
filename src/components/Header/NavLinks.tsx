export default function NavLinks() {
  return (
    <ul className="hidden sm:flex flex-col sm:flex-row gap-x-4 sm:gap-x-4 md:gap-x-7 lg:gap-x-14 text-[1rem]">
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
  );
}
