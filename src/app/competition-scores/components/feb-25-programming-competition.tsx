import Image from "@/components/image";

export function Feb2025Competition() {
  return (
    <div className="border-b border-[#1377bd] pb-10">
      <h2 className="pt-10 text-3xl">February 2025 Programming Competition</h2>
      <p className="pt-10 text-lg">Top 3 Winners:</p>
      <p className="text-lg">Henry Getz, Breyon Gunn, Carter Cook</p>
      <div className="flex items-center justify-center">
        <Image
          className="pt-10 shadow-md transition-transform duration-300 hover:scale-102"
          width={500}
          height={1200}
          src="/images/competition-scores/feb25-prog-comp.png"
          alt="February 2025 Programming Competition Scores"
        />
      </div>
    </div>
  );
}
