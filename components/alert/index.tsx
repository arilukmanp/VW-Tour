/* eslint-disable react-hooks/exhaustive-deps */

import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { motion } from "framer-motion";
import { IoAlertOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface AlertInterface {
  isShowed: boolean;
  setIsShowed: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export default function Alert(props: AlertInterface) {
  const { isShowed, setIsShowed, children } = props;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isShowed) {
      timer = setTimeout(() => {
        setIsShowed(false);
      }, 3000);
    }

    return () => {
      timer;
    };
  }, [isShowed]);

  const mainAnimation = {
    unmount: {
      opacity: 0,
      y: 0,
    },
    mount: {
      opacity: 1,
      y: 100,
    },
  };

  return (
    <motion.div
      role="alert"
      className="fixed z-20 -top-10 left-0 right-0"
      initial="unmount"
      exit="unmount"
      animate={isShowed ? "mount" : "unmount"}
      variants={mainAnimation}
    >
      <div className="text-center transition-all mx-4">
        <div
          className="px-4 py-3 bg-red-500 items-center text-white leading-none rounded-full flex md:inline-flex"
          role="alert"
        >
          <span className="flex rounded-full bg-red-400 p-1.5 text-md mr-3">
            <IoAlertOutline />
          </span>

          <span className="mr-4 text-left underline-offset-4 flex-auto text-sm">
            {children}
          </span>

          <div role="button" onClick={() => setIsShowed(false)} className="p-1">
            <IoClose className="text-lg text-red-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
