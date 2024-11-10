import Image from "next/image";

const HeroSection = () => {
    return(
        <main className="flex w-[1486px] h-[825.56px]">
            <div className="w-2/3 flex flex-col justify-center items-start m-10">
                <h2 className="text-[37.84px] text-[#000000] font-bold flex flex-col w-[472.97px] ">
                  IMPECCABLE CRAFTSMANSHIP AND FINESSE
                </h2>
                <br/>
                <p className="w-[798.9px] text-[29.24px] text-[#787054]">
                  An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
                </p>
                <br />
                <button className="bg-[#A29875] text-[25.8px] text-[#FFFFFF] w-[247.67px] h-[49.2px] p-[8.6px] rounded-lg">
                  Explore Now
                </button>
            </div>
            <div className=" w-1/3 flex flex-col justify-center m-9">
               <Image 
               src={"/HeroImage.svg"}
               alt="HeroIamge"
               width={421.38}
               height={573.59}
               />
            </div>
        </main>
    )
};

export default HeroSection;