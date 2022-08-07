import { useRouter } from "next/router";
import { useEffect } from "react";
import { ELocalStorage } from "../../src/constants";
import { ERoutes } from "../../src/constants/Routes";
import { getUserData } from "../../src/services/services";

const Login = () => {
  const router = useRouter()
  const openLogin = () => {
    var client_id = '44e5be0478d34eb799c8af33aad00e86';
    var redirect_uri = 'http://localhost:3000/login';

    function generateRandomString(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
          charactersLength));
      }
      return result;
    }

    var state = generateRandomString(16);

    // localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email user-top-read';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&show_dialog=true';
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);
    window.location.href = url
  }

  useEffect(() => {
    if (localStorage.getItem(ELocalStorage.Token)) {
      checkTokenExpire()
    } else {
      const access_token = window.location.hash?.match(/\#(?:access_token)\=([\S\s]*?)\&/)?.length ? window.location.hash?.match(/\#(?:access_token)\=([\S\s]*?)\&/)![1] : ''
      if (access_token && localStorage.getItem(ELocalStorage.Token) !== access_token) {
        localStorage.setItem(ELocalStorage.Token, access_token)
        router.push(ERoutes.PROFILE)
      } else {
        openLogin()
      }
    }
  }, [router])

  const checkTokenExpire = async () => {
    try {
      const result = await getUserData(localStorage.getItem(ELocalStorage.Token))
      if(result) {
        router.push(ERoutes.PROFILE)
      }
    } catch {
      localStorage.removeItem(ELocalStorage.Token)
      openLogin()
    }
  } 

  return (
    <div>
    </div>
  )
}

export default Login