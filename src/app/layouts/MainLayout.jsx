import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";
import { useSelector } from "react-redux";

const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Fixed Navbar */}
      <header className="z-50 shrink-0">
        <Navbar />
      </header>

      {/* Only Outlet Scrolls */}
      <main className="min-h-0 flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
