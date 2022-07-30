const Login = () => {

  const openLogin = () => {
    var client_id = '44e5be0478d34eb799c8af33aad00e86';
    var redirect_uri = 'http://localhost:3000/login';

    // var state = generateRandomString(16);

    // localStorage.setItem(stateKey, state);
    var scope = 'user-read-private user-read-email';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&show_dialog=true';
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    // url += '&state=' + encodeURIComponent(state);
    window.location.href = url
  }

  return (
    <div>
      <button onClick={openLogin}>Login</button>
    </div>
  )
}

export default Login