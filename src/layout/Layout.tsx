import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Back } from "../components/Back";

export const Layout = () => {
  const location = useLocation();

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
