import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  
    return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
      className="relative w-60 h-72 px-8 py-10 bg-zinc-800/80 text-white rounded-[40px] overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between py-2 px-8 mb-2">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center">
            {data.close ? (
              <IoClose />
            ) : (
              <LuDownload size=".8rem" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-2 ${data.tag.tagColor} flex justify-center items-center`}
          >
            <h4 className="text-md font-semibold">{data.tag.tagTitle}</h4>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
