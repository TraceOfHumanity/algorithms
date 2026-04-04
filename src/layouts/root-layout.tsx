import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/sidebar";

const RootLayout = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
