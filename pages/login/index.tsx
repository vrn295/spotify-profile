import { useRouter } from "next/router";
import { useEffect } from "react";
import SpotifyLoader from "../../src/common/SpotifyLoader";
import useLoginView from "../../src/hooks/view/useLoginView";

const Login = () => {
  const router = useRouter();
  const { loginStatusCheck } = useLoginView();

  useEffect(() => {
    loginStatusCheck();
  }, [router]);

  return (
    <div>
      <SpotifyLoader />
    </div>
  );
};

export default Login;
