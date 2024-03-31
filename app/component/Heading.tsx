import Image from "next/image";
import React from "react";

const Heading = () => {
  return (
    <div className="bg-white text-black w-full h-[120px] flex justify-between items-center pl-[343px] pr-[254px]">
      <Image src="/logo.png" width={80} height={80} alt="logo" className="" />

      <div className="flex flex-row items-center">
        <div className="flex flex-col ">
          <div className="text-[#a5a5a5]">Handicrafted by</div>
          <div className="flex flex-row-reverse">Jim HLS</div>
        </div>
        <Image
          src="/avatar.jpg"
          height={80}
          width={80}
          alt="avatar"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Heading;
