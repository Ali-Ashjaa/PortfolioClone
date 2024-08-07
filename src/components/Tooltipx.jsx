import { motion } from "framer-motion";
import { useState } from "react";

const Tooltipx = ({ icon, title }) => {
  const [showTip, setShowtip] = useState(false);
  return (
    <div className="relative  ">
      <button
        type="button"
        onMouseEnter={() => {
          setShowtip(true);
        }}
        onMouseLeave={() => {
          setShowtip(false);
        }}
      >
        {icon}
      </button>
      {showTip && (
        <motion.span
          initial={{ opacity: 0.2, y: 18, scale: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{ duration: 0.1 }}
          className="absolute flex justify-center bottom-16 font-[gilroy-medium] tracking-wide -left-4 bg-black p-2 rounded-xl text-white"
        >
          {title}
          <span className="absolute top-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={12}
              fill="#000"
              transform="rotate(180)"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017Z"></path>
            </svg>
          </span>
        </motion.span>
      )}
    </div>
  );
};

export default Tooltipx;
