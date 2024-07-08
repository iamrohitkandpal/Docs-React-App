import React, { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {

    const ref  = useRef(null);

  const data = [
    {
      desc: "This the display text for the card showing on screen in the docs app.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This the display text for the card showing on screen in the docs app.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "sky" },
    },
    {
      desc: "This the display text for the card showing on screen in the docs app.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This the display text for the card showing on screen in the docs app.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="w-full h-full fixed z-[3] p-5 top-0 left-0 flex gap-5 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} reference={ref}/>  
        ))}
      </div>
    </>
  );
};

export default Foreground;
