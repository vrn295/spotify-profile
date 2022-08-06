import { useRouter } from "next/router";
import { useEffect } from "react";
import { ELocalStorage } from "../../src/constants";
import { ERoutes } from "../../src/constants/Routes";

const Login = () => {
  const router = useRouter()
  const openLogin = () => {
    var client_id = '44e5be0478d34eb799c8af33aad00e86';
    var redirect_uri = 'http://localhost:3000/login';

    // var state = generateRandomString(16);

    // localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email user-top-read';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&show_dialog=true';
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    // url += '&state=' + encodeURIComponent(state);
    window.location.href = url
  }

  useEffect(() => {
    if(localStorage.getItem(ELocalStorage.Token)) {
      router.push(ERoutes.PROFILE)
    } else {
    const access_token = window.location.hash?.match(/\#(?:access_token)\=([\S\s]*?)\&/)?.length ? window.location.hash?.match(/\#(?:access_token)\=([\S\s]*?)\&/)![1] : ''
    const token_from_local = localStorage.getItem(ELocalStorage.Token)
    if (access_token && localStorage.getItem(ELocalStorage.Token) !== access_token) {
      localStorage.setItem(ELocalStorage.Token, access_token)
    } else {
      openLogin()
    }}
  }, [])
  

  return (
    <div>
    </div>
  )
}

export default Login