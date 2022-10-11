import { useRouter } from "next/router";
import { FC, useContext, useState } from "react";
import { ELocalStorage } from "../../constants";
import { ERoutes } from "../../constants/Routes";
import { AppStateContext } from "../../context/AppStateContext";

const useProfileView = () => {
  const router = useRouter();
  const { handleUserDataCall, userData } = useContext(AppStateContext);
  const [isLoading, setisLoading] = useState(true);
  const [dominatorColor, setdominatorColor] = useState("");

  const handleUserData = () => {
    if (localStorage.getItem(ELocalStorage.Token)) {
      handleUserDataCall(
        localStorage.getItem(ELocalStorage.Token) || "",
        setisLoading
      );
    } else {
      router.push(ERoutes.LOGIN);
    }
  };

  return {
    handleUserData,
    isLoading,
    setdominatorColor,
    dominatorColor,
  };
};

export default useProfileView;
