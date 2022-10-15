import { motion } from "framer-motion";
import { FC, useEffect, useRef } from "react";
import useOutSideClick from "../../hooks/useOutSideClick";
import styles from "./Modal.module.scss";

interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
  postion: {
    top: number;
    left: number;
  };
  children: JSX.Element;
}

const Modal: FC<IModalProps> = ({ isOpen, handleClose, postion, children }) => {
  const wrapperRef = useRef(null);

  useOutSideClick({
    wrapperRef: isOpen ? wrapperRef : null,
    outSideClickHandler: handleClose,
  });

  useEffect(() => {
    const bodyEle = document.getElementsByTagName("body");
    if (isOpen) {
      bodyEle.item(0).style.overflow = "hidden";
    } else {
      bodyEle.item(0).style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <motion.div
      className={styles.overlay}
      animate={isOpen ? "visible" : "hidden"}
      transition={{ duration: 0.2, stiffness: 500 }}
      variants={{
        visible: {
          opacity: 1,
          left: "50%",
          top: "50%",
          scale: 1,
          x: "-50%",
          y: "-50%",
        },
        hidden: {
          opacity: 0.5,
          left: postion.left,
          top: postion.top,
          scale: 0,
          x: "-100%",
          y: "0%",
        },
      }}
    >
      <motion.div
        ref={wrapperRef}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        transition={{ duration: 0.5, stiffness: 100 }}
        variants={{
          visible: {
            left: "50%",
            top: "50%",
            scale: 1,
            x: "-50%",
            y: "-50%",
          },
          hidden: {
            left: postion.left,
            top: postion.top,
            scale: 0,
            x: "-100%",
            y: "0%",
          },
        }}
        className={styles.container}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
