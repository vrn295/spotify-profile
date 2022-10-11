import { useRouter } from "next/router";
import { ELocalStorage } from "../../constants";
import { ERoutes } from "../../constants/Routes";
import { getUserData } from "../../services/services";
import { generateRandomString } from "../../utils";

const useLoginView = () => {
  const router = useRouter();

  const openLogin = () => {
    var state = generateRandomString(16);

    var scope =
      "user-read-private user-read-email user-top-read playlist-read-private streaming";

    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url +=
      "&client_id=" +
      encodeURIComponent(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID);
    url += "&scope=" + encodeURIComponent(scope);
    url += "&show_dialog=true";
    url +=
      "&redirect_uri=" +
      encodeURIComponent(`${process.env.NEXT_PUBLIC_WEB_URL}/login`);
    url += "&state=" + encodeURIComponent(state);
    window.location.href = url;
  };

  const loginStatusCheck = () => {
    if (localStorage.getItem(ELocalStorage.Token)) {
      checkTokenExpire();
    } else {
      const access_token = window.location.hash?.match(
        /\#(?:access_token)\=([\S\s]*?)\&/
      )?.length
        ? window.location.hash?.match(/\#(?:access_token)\=([\S\s]*?)\&/)![1]
        : "";
      if (
        access_token &&
        localStorage.getItem(ELocalStorage.Token) !== access_token
      ) {
        localStorage.setItem(ELocalStorage.Token, access_token);
        router.push(ERoutes.PROFILE);
      } else {
        openLogin();
      }
    }
  };

  const checkTokenExpire = async () => {
    try {
      const result = await getUserData(
        localStorage.getItem(ELocalStorage.Token)
      );
      if (result) {
        router.push(ERoutes.PROFILE);
      }
    } catch {
      localStorage.removeItem(ELocalStorage.Token);
      openLogin();
    }
  };

  return {
    loginStatusCheck,
  };
};

export default useLoginView;
