import { useEffect } from "react";

/**
 * Component that alerts if you click outside of it
 */
export default function useOutSideClick({ wrapperRef, outSideClickHandler }) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    if (wrapperRef) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      outSideClickHandler();
    }
  }

  return {};
}
