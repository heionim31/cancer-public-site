// Container2.tsx
import CountPatients from "../../components/Home/CountPatients";

export default function Container2() {
  // Array of count and text data
  const data = [
    { count: 500, text: "New Patients" },
    { count: 2000, text: "Total Patients" },
    { count: 900, text: "Cured Patients" },
  ];

  return (
    <div className="flex items-center justify-center h-28 bg-[#FDFFFE] text-[#145B3A] border-b border-[#857D7D] border-opacity-25">
      {data.map((item, index) => (
        <CountPatients key={index} count={item.count} text={item.text} />
      ))}
    </div>
  );
}
