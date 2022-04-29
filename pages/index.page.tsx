import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Login from "./auth/login.page";
import Home from "./page/home/index.page";

function IndexPage() {
  const router = useRouter();
  const [params, setParams] = useState<any>("");

  useEffect(() => {
    if (Cookies.get("token")) {
      setParams(undefined);
      return;
    }

    const paramsUrl = new URLSearchParams(window.location.search);
    setParams(paramsUrl.get("id") ?? undefined);
  }, [params]);

  return (
    <>
      {params && <Login />}
      {params == undefined && <Home />}
    </>
  );

  // return <>{params.get("id") ? <Login /> : <Home />}</>;
}

export default IndexPage;
