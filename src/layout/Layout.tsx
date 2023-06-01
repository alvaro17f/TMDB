import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Back } from "../components/Back";
import { getLocalStorage } from "../utils/localStorage";
import { useUserContext } from "../Providers/UserProvider";
import { useEffect } from "react";

export const Layout = () => {
  const { dispatch } = useUserContext();
  const location = useLocation();

  useEffect(() => {
    if (getLocalStorage("guest_session_id")) {
      dispatch?.({
        type: "CREATE_GUEST_SESSION",
        payload: getLocalStorage("guest_session_id"),
      });
    }
  }, []);

  return (
    <>
      <Header />
      {location.pathname !== "/" && <Back />}
      <main>
        <Outlet />
      </main>
    </>
  );
};
