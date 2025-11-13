import svgImages from "@/components/Constants/svgImages";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="relative flex flex-col gap-[10vh]">
      <div className="absolute top-0 left-0">
        <svgImages.starBgImage />
      </div>
      <div>
        hey
      </div>
      <div>
        hero
      </div>
    </div>
  );
};

export default HomePage;
