import FooterInfo from "./FooterInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <FooterInfo />
      <div className="bg-[#062A1F] text-white py-2 text-center relative bottom-0 w-full">
        <p className="text-xs px-4">
          © Copyright {currentYear} | PCC x QCU | All Rights Reserved
        </p>
      </div>
    </>
  );
}
