// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.1}

        className=" relative flex-shrink-0 w-60 h-80 rounded-[50px] overflow-hidden text-white py-10 px-7 bg-zinc-900/90"
      >
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-medium leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between px-7 py-3 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-[1.55rem] h-[1.55rem] bg-zinc-500 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose size="1em" color="#fff" />
              ) : (
                <LuDownload size="1em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full p-5 bg-sky-600 flex items-center justify-center`}
            >
              <h3 className="text-sm font-medium">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
