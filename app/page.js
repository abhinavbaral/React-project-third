"Use client"
import React from "react";
import Bg from "@/Components/Bg";
import Fg from "@/Components/Fg";

const page = () => {
  return (
    <>
      <div className=" relative w-full h-screen bg-slate-500 ">
      <Bg />
      </div>
      <Fg />
    </>
  );
};

export default page;
