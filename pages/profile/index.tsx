import React, { useContext, useEffect } from "react";
import { AppStateContext } from "../../src/context/AppStateContext";
import Profile from "../../src/components/Profile";
import Navbar from "../../src/components/Navbar";
import Seo from "../../src/common/Seo";
import SpotifyLoader from "../../src/common/SpotifyLoader";
import useProfileView from "../../src/hooks/view/useProfileView";
import { conditionRendering } from "../../src/utils";
const index = () => {
  const { userData } = useContext(AppStateContext);
  const { handleUserData, isLoading } = useProfileView();

  useEffect(() => {
    handleUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <Seo title={userData?.display_name || "Profile"} />
      {conditionRendering(<SpotifyLoader />, <Profile />, isLoading)}
    </div>
  );
};

export default index;
